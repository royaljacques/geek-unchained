"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.Server({ port: 8080 });
wss.on('listening', () => {
    console.log('WebSocket server is running on port 8080');
});
/**
 *
wss.on('connection', (ws: WebSocket, req: IncomingMessage) => {
  if (req.url == null) return;
  const parameters = url.parse(req.url, true).query;
  const authToken = parameters.token;
  if (authToken === undefined) {

  } else {

  }
  const id = uuidv4();
  clients.set(id, ws);
  console.log(`New client connected with ID: ${id}`);

  ws.send(JSON.stringify({ type: 'auth', id }));

  ws.on('message', (message: string) => {
    console.log(`Received message from ${id}: ${message}`);
    wss.clients.forEach((client) => {
      client.send(`Server received message from ${id}: ${message}`);
    });
  });

  ws.on('close', () => {
    clients.delete(id);
    console.log(`Client ${id} disconnected`);
  });
});
 */ 
