import * as express from "express";
import SecretMessageUseCases from "../application/SecretMessageUseCases";
import StoreSecretMessage from "../Infrastructure/StoreSecretMessage";

class MessageController {

    constructor(
        readonly secretMessageUseCases: SecretMessageUseCases = new SecretMessageUseCases(new StoreSecretMessage())
    ) { }

    async createSecretMessage(req: express.Request, res: express.Response) {
        const { message } = req.body;
        try {
            const key = await this.secretMessageUseCases.createSecretMessage(message);
            res.status(201).json({ secretKey: key });
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    async getSecretMessage(req: express.Request, res: express.Response) {
        const { secretKey } = req.params;
        try {
            const secret = await this.secretMessageUseCases.getSecretMessage(secretKey);
            if (!secret) return res.sendStatus(404);
            res.status(200).json({ secretMessage: secret.message });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}

export default MessageController;