const socket = new WebSocket(`ws://${window.location.host}`);
// socket means connection to the server

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data, " from the Server");
});

socket.addEventListener("close", () => {
  console.log("Disonnected to Server ❌");
});

setTimeout(() => {
  socket.send("hello from the browser");
}, 10000);
