import { expect, test } from '@jest/globals';
import request from 'supertest';
import app from "../src/presentation/MessageRoute"



describe('Post Method Status code', () => {

    test('Post message, Should be successful', async () => {
        const response = await request(app).post("/api/secrets").send({
            message: "Hello World"
        })
        expect(response.body).toMatchObject({});
        expect(response.statusCode).toBe(201);
    });

})

describe('Get Method Status code', () => {
    test('Get request should go wrong', async () => {
        const response = await request(app).get(`/api/secret/secretKey`)
        expect(response.statusCode).toBe(404);
    })
})
