import env from "../configEnv.js";
import express from "express";
import { createServer } from "node:http";
import { Server as SocketServer } from "socket.io";

const app = express();
const server = createServer(app);
const io = new SocketServer(server);

server.listen(env.PORT, () => {
  console.log(`Server listening on: http://localhost:${env.PORT}`);
});

io.on("connection", (socketServer) => {
  console.log("New client connected");
});
