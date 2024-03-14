import SecretMessageModel from "../domain/model/SecretMessageModel";
import SecretMessageRepository from "../domain/repository/SecretMessageInterface";

class SecretMessageUseCases {

    constructor(readonly secretMessageRepository: SecretMessageRepository) {

    }

    async createSecretMessage(message: string): Promise<string> {
        const secretMessage = new SecretMessageModel(message);
        const keyValue = await this.secretMessageRepository.saveSecret(secretMessage);
        return keyValue;
    }

    async getSecretMessage(keyValue: string): Promise<SecretMessageModel | undefined> {
        const secret = await this.secretMessageRepository.exposeSecret(keyValue);
        return secret;
    }

}

export default SecretMessageUseCases;