import express, { json } from "express";
import { createTransport } from "nodemailer";
import { renderFile } from "ejs";
import { convert } from "./webhook.js";

export const hostPage = () => {
    var app = express();
    app.use(express.static('public'));

    const PORT = process.env.PORT || 3000;

    app.use(json());
    app.set('views', 'public/views');
    app.engine('html', renderFile);
    app.set('view engine', 'html');

    let transporter = null;
    if (process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USERNAME && process.env.SMTP_PASSWORD)
    {
        transporter = createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        transporter.verify(function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Mail server is ready to take messages");
            }
        });
    } 

    app.get("/", (req, res) => {
        return res.sendFile("index.html", { root: "public/views" });
    });

    app.get("/about", (req, res) => {
        return res.sendFile("about.html", { root: "public/views" });
    });

    app.get("/projects", (req, res) => {
        return res.sendFile("projects.html", { root: "public/views" });
    });

    app.get("/contact", (req, res) => {
        return res.sendFile("contact.html", { root: "public/views" });
    });

    app.get("/epik", (req, res) => {
        return res.sendFile("epik.html", { root: "public/views" });
    });

    app.get("/version", (req, res) => {
        return res.sendFile("version.html", { root: "public/views" });
    });

    app.post("/webhook", async (req, res) => {
        if (JSON.stringify(req.body).includes("No player-facing changes")) {
            return;
        }

        if (req.body.action != "published") {
            return;
        }

        const discordBody = convert(req.body);

        try {
            const discordRes = await fetch(process.env.DISCORD_RELEASE_WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(discordBody)
            });
    
            return res.status(discordRes.status).send(discordRes.statusText);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    });

    app.post("/contact", (req, res) => {
        if (req.query.sendEmail != "" && req.query.sendEmail != true) {
            return;
        }

        var discordPromise = new Promise((resolve, reject) => {
            if (!process.env.DISCORD_WEBHOOK_URL || !process.env.DISCORD_USERNAME || !process.env.DISCORD_AVATAR_URL) {
                console.log("Missing Discord webhook configuration, skipping Discord send");
                return resolve();
            }

            var options = {
                'method': 'POST',
                'url': process.env.DISCORD_WEBHOOK_URL,
                'headers': {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": process.env.DISCORD_USERNAME,
                    "avatar_url": process.env.DISCORD_AVATAR_URL,
                    "embeds": [{
                        "title": req.body.subject,
                        "description": req.body.message,
                        "color": 0x00adef,
                        "fields": [{
                            "name": "From",
                            "value": req.body.email,
                            "inline": true
                        }, {
                            "name": "Sent",
                            "value": `<t:${Math.round(Date.now()/1000)}:F>`,
                            "inline": true
                        }],
                    }]
                })
            };

            fetch(options.url, options).then(res => {
                if (res.status != 204) {
                    return reject({
                        source: "discord",
                        message: res.status + " Discord returned a non-204 status code",
                        data: res
                    });
                }

                return resolve();
            }).catch(err => {
                return reject({
                    source: "discord",
                    message: res.status + " " + err,
                    data: res
                });
            });
        });

        var mailPromise = new Promise((resolve, reject) => {
            const mail = {
                from: process.env.SMTP_FROM,
                to: process.env.SMTP_TO,
                subject: req.body.subject,
                text: req.body.message + "\n\nSent from: " + req.body.email,
            };

            if (!transporter) {
                console.log("No mail server configured, skipping mail send");
                return resolve();
            }

            transporter.sendMail(mail, (err, data) => {
                if (err) {
                    return reject({
                        source: "mail",
                        message: err,
                        data
                    });
                }
                
                return resolve();
            });
        });

        Promise.all([discordPromise, mailPromise]).then(() => {
            return res.status(200).json({
                status: "ok",
                success: true
            });
        }).catch(error => {
            return res.status(500).json({
                status: "error",
                success: false,
                error: "An internal server error occured",
                message: error.message,
                data: error.data
            });
        });
    });

    app.get("*", (req, res) => {
        return res.status(404).sendFile("404.html", { root: "public/views" });
    });

    return {
        port: PORT,
        server: app.listen(
            PORT,
            () => console.log("Website live and listening on port " + PORT)
        )
    };
}