const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  // event listener for data
  conn.on("data", (data) => {
    console.log("Server: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: eet");
    //conn.write("Move: up");
  });

  return conn;
};

module.exports = connect;