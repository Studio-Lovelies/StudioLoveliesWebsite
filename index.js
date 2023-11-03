import { hostPage } from "./host";
const server = hostPage();

process.on("uncaughtException", error => {
    console.log(error);
});

process.on("uncaughtRejection", error => {
    console.log(error);
});