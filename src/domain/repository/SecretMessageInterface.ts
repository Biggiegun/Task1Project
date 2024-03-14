import SecretMessageModel from "../model/SecretMessageModel";

interface SecretMessageRepository {
    saveSecret(secretMessage: SecretMessageModel): Promise<string>;
    exposeSecret(key: string): Promise<SecretMessageModel | undefined>;
}

export default SecretMessageRepository;