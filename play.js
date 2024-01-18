const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding("utf8");

  // event listener for data
  conn.on("data", (data) => {
    console.log("Server: ", data);
  });

  return conn;
};

console.log("Connecting ...");
const connection = connect();