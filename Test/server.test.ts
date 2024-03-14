import { expect, jest, test } from '@jest/globals';
import request from 'supertest';
import app from "../src/presentation/MessageRoute"
const request = require("supertest");



describe('Post Method Response', () => {

    test('Post message mock', async () => {
        const response = await request(app).post("/api/secrets").send({
            message: "Hello World"
        })
        // expect(response.body).toEqual({});
        expect(response.statusCode).toBe(201);
    });

})
