import { hostPage } from "./host.js";
const server = hostPage();

process.on("uncaughtException", error => {
    console.log(error);
});

process.on("uncaughtRejection", error => {
    console.log(error);
});