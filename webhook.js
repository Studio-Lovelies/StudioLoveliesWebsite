// converts a GitHub release publish webhook payload into a Discord webhook message
// 
// https://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=published#release
// https://discord.com/developers/docs/resources/webhook#execute-webhook
//
// converts a pretty bland github event into a pretty discord message:
// - lists the release notes in the message content
// - embeds the download links for the release assets
// - links to the GitHub release page
// - uses a custom color
export const convert = (input) => {
    const normalizeLineEndings = (str) => str.replace(/\r\n|\r|\n/g, '\n');

    const release = input.release;
    const assetOrder = ["Windows-x86", "Windows-x64", "Linux-x64", "macOS", "WebGL"];
    const assets = release.assets
    .map(asset => ({
        name: asset.name.replace(/-v\d+\.\d+\.\d+-\d+/, '').replace(/-v\d+\.\d+\.\d+/, ''),
        value: asset.browser_download_url
    }))
    .sort((a, b) => assetOrder.indexOf(a.name.replace(".zip", "")) - assetOrder.indexOf(b.name.replace(".zip", "")))
    .map(asset => ({
        name: asset.name.replace(/-x86/g, " x86").replace(/-x64/g, " x64").replace(/.zip/g, "") + " Build",
        value: asset.value
    }))
    .concat([{
        name: "GitHub Release",
        value: release.html_url
    }]);

    return {
        content: `> # ${release.name}\n${normalizeLineEndings(release.body)}`,
        tts: false,
        embeds: [
            {
                color: 15317498,
                fields: assets,
                url: release.html_url
            }
        ],
        components: [],
        actions: {},
        username: "GitHub",
        avatar_url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    };
};