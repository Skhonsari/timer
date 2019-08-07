import * as readline from "readline-sync";
import * as fs from "fs";
import * as timeUtils from "./timeUtils";

let text = "";

let previousDate: Date = null;

function end() {
    let currentDate = new Date();
    if (previousDate !== null) {
        let interval = timeUtils.subtractTimes(currentDate, previousDate);
        let time = `${previousDate.toISOString()} - ${currentDate.toISOString()}    ${timeUtils.pretifyAsTime(interval)}\n`;
        previousDate = null;
        fs.appendFileSync("./times.txt", time);
        console.log(`you worked for ${timeUtils.pretifyAsTime(interval)} hours`);
    }
}

while (text !== "exit") {
    if ("start".indexOf(text) === 0) {
        if (previousDate !== null) {
            console.log("another timer is running");
        } else {
            previousDate = new Date();
        }
        console.log(`time started at ${previousDate.toISOString()}`);
    } else if ("end".indexOf(text) === 0) {
        if (previousDate === null) {
            console.log("no timer is running");
        } else {
            end();
        }
    }

    text = readline.question().toLowerCase();
}

process.on('exit', function () {
    end();
    process.exit(0);
});

process.on("SIGINT", function () {
    end();
    console.warn("Ctrl+C...");
    process.exit(2)
})
