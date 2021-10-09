const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const os = require("os");

var osArch = () => {
    console.log("OS Architecture is: " + os.arch());
    repeat();
};
var FreeMemoryDetail = () => {
    console.log("Free Memory Detail is: " + os.freemem());
    repeat();
};
var TotalMemoryDetail = () => {
    console.log("Total Memory Detail is: " + os.totalmem());
    repeat();
};
var OSPlatform = () => {
    console.log("OS Platform is: " + os.platform());
    repeat();
};
var currUser = () => {
    console.log("current User is: " + os.userInfo());
    repeat();
};
var instruction = () => {
    console.log("[1] For OS Architecture. ");
    console.log("[2] For Free Memory System.");
    console.log("[3] For total Memory System.");
    console.log("[4] For Os Platform");
    console.log("[5] For Current User Info.");
    console.log("[6] For Exit");
}
var start = () => {
    rl.question("Enter your choice: ", (ch) => {
        if (ch === "1") {
            osArch();
        } else if (ch === "2") {
            FreeMemoryDetail();
        } else if (ch === "3") {
            TotalMemoryDetail();
        } else if (ch === "4") {
            OSPlatform();
        } else if (ch === "5") {
            currUser();
        } else if (ch === "6") {
            rl.close();
        } else {
            console.log("Your choice is invalid. \n");
            repeat();
        }
    });
}
var repeat = () => {
    instruction();
    start();
}
console.log("Welcome to DCS!");
repeat();