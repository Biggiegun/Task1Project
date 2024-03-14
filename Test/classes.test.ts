import { expect, test } from '@jest/globals';
import StoreSecretMessage from '../src/Infrastructure/StoreSecretMessage';

describe("Class function test", () => {

    const myStoreSecretMessage = new StoreSecretMessage();

    test("type of test should be 'function'", () => {
        expect(typeof myStoreSecretMessage.exposeSecret).toBe("function");
    })

    test("Type of Return function, should be 'object'", () => {
        expect(myStoreSecretMessage.exposeSecret("hello")).toMatchObject({});
    })
})
