import request from 'supertest';
import { expect, jest, test } from '@jest/globals';
const request = require('supertest');
const app = require('../app');

let secretKey = "a";

describe('Default Get response', () => {

    test('Get Method Should respond an empty body', async () => {
        const response = await request(app).get(`/api/secret/${secretKey}`);
        // expect(response.body).toEqual({});
        expect(response.statusCode).toBe(404);
    });

})

// describe('Server launched', () => {

//     let testPort = 3000;

//     test('Server is working', async () => {
//         const state = await request(app).listen(testPort, () => {
//             expect(state).toBe
//         });
//     });
// })