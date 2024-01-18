const connect = require("./client");

console.log("Connecting ...");
const connection = connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { // Ctrl+C input = '\u0003'
    console.log("Exiting game.");
    process.exit();
  }
};

setupInput();