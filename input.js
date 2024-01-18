let conn;

const setupInput = function (connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key, conn));
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { // Ctrl+C input = '\u0003'
    console.log("Exiting game.");
    process.exit();
  } else if (key === 'w') {
    conn.write("Move: up");
  } else if (key === 'a') {
    conn.write("Move: left");
  } else if (key === 's') {
    conn.write("Move: down");
  } else if (key === 'd') {
    conn.write("Move: right");
  }
};

module.exports = setupInput;