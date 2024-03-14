// // newMessage test
import { expect, jest, test } from '@jest/globals';
const newMessage = require('../app');

// const myFunction = jest.mock("../server", () => jest.fn());

describe('Function Test', () => {
    test('function called, should return a response', () => {
        expect(newMessage()).toBeDefined();
    })
})
