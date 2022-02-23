import app from '../app.js';
import request from 'supertest';

describe('sample', () =>
    test('1+1=2', () => expect(1 + 1).toBe(2)
    ));

describe('app', () => {
    describe('test of /', () => {
        describe('GET', () => {
            test('should return 200', async () => {
                const response = await request(app).get('/');
                expect(response.status).toBe(200);
            });
            test('should return an array of objects', async () => {
                const response = await request(app).get('/');
                expect(response.body[0]).toBeInstanceOf(Object);
            });
        });
        describe('POST', () => {
            // test('should return 201', async () => {
            //     const response = await request(app)
            //         .post('/')
            //         .send({name: 'prueba'});
        // });
        test('should return id of saved image', async () => {
            const response = await request(app)
            .post('/')
            .send({image:{name: 'image.test'}});
                expect(response.statusCode).toBe(201);
                expect(response.body.insertedId).toBeDefined();
            });
        });
    });
});