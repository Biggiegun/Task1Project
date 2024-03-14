import SecretMessageRepository from "../domain/repository/SecretMessageInterface";
import SecretMessageModel from "../domain/model/SecretMessageModel";
import * as crypto from "crypto";
import * as data from "../../config.json";
const secretsMap: Map<string, { message: string }> = new Map();

class StoreSecretMessage implements SecretMessageRepository {

    async GenerateRandomString() {
        return crypto.randomBytes(data.secretSize).toString('hex');
    }

    async saveSecret(secretMessage: SecretMessageModel): Promise<string> {
        const secretKey = await this.GenerateRandomString();
        secretsMap[secretKey] = JSON.stringify(secretMessage);
        return secretKey;
    }

    async exposeSecret(key: string): Promise<SecretMessageModel | undefined> {
        const secretData = secretsMap[key];
        if (!secretData) return undefined;
        return JSON.parse(secretData) as SecretMessageModel;
    }

}

export default StoreSecretMessage;