import app from '../app.js';
import request from 'supertest';
import { Buffer } from 'buffer';
describe('sample', () =>
    test('1+1=2', () => expect(1 + 1).toBe(2)
    ));

describe('app', () => {
    describe('test of /', () => {
        test('GET should return an array of images', async () => {
            const response = await request(app).get('/image');
            expect(response.status).toBe(200);
            expect(response.body[0]).toBeInstanceOf(Object);
        });
        test('POST should return id of saved image', async () => {
            const buffer = Buffer.from('test');
            const response = await request(app)
                .post('/image')
                .field({name:'test'})
                .attach('file', buffer, 'test.jpeg');
            expect(response.statusCode).toBe(201);
            expect(response.body.insertedId).toBeDefined();
        });
        test('PUT should edit title of an image', async () => {
            const response = await request(app)
                .put('/image/6217514e2921ef5c80351bb1')
                .set('Content-Type', 'application/json')
                .send('{ "name": "name has been edited" }');

            console.log(response.body);
            expect(response.statusCode).toBe(200);
            expect(response.body.modifiedCount).toEqual(1);
        });
    });
});
