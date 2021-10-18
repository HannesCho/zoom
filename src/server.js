import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
// app.listen(3000, handleListen);

const server = http.createServer(app); // http server

const wss = new WebSocket.Server({ server }); // websocket server + http server
// only create wss should be also fine

// function handleConnection(socket) {
//   //socket means the browser just connect
//   console.log(socket);
// }

// this is better bcause you can see what happen after coonection.
wss.on("connection", (socket) => {
  console.log("Connected to Browser ✅");
  socket.on("close", () => console.log("Disconnected from the Browser ❌"));
  socket.on("message", (message) => {
    console.log(message.toString("utf8"));
  });
  socket.send("hello!!");
});

server.listen(3000, handleListen);
