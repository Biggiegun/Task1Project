import express from "express";
import MessageController from "./MessageController";
const app = express();

app.use(express.json());

const messageController = new MessageController();

app.post('/api/secrets', messageController.createSecretMessage.bind(messageController));

app.get('/api/secret/:secretKey', messageController.getSecretMessage.bind(messageController));

export default app;