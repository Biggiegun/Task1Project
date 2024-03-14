import { expect, test } from '@jest/globals';
import GenerateRandomString from "../src/Infrastructure/StoreSecretMessage";

// const myFunction = jest.mock("../server", () => jest.fn());

describe('Function Test', () => {
    test('function called, should return a response', () => {
        expect(new GenerateRandomString()).toBeDefined();
    })
})
