const EventEmitter = require("node:events");

class CallingBell extends EventEmitter {}

const callingBell = new CallingBell();

callingBell.on("ring", () => {
  console.log("Yeah the call is ending ");
});
callingBell.on("ring", () => {
  console.log("ring ring ring");
});

callingBell.on("broken", () => {
  console.log("oh no the call is broken");
});

callingBell.emit("ring");
