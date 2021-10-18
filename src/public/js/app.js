const socket = new WebSocket(`ws://${window.location.host}`);
// socket means connection to the server

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  console.log("Just got this: ", message.data, " from the Server");
});

socket.addEventListener("close", () => {
  console.log("Disonnected to Server ❌");
});
