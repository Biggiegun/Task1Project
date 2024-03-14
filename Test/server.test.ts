import request from 'supertest';
import { expect, jest, test } from '@jest/globals';
const request = require("supertest");
const app = require('../app');


describe('Post Method Response', () => {

    test('Post message mock', async () => {
        const response = await request(app).post(`/api/secrets`).send({
            message : "Hello World"
        })
        // expect(response.body).toEqual({});
        expect(response.statusCode).toBe(201);
    });

})
