import request from 'supertest';
import app from '../../../src/app';
import { connectMongoDB, disconnectMongoDB } from '../../helpers';
import ClassModel from '../../../src/models/class.model';

beforeAll(async () => {
  connectMongoDB();
});

afterAll(async () => {
  disconnectMongoDB();
});

describe(' GET /classes', () => {
  it('should return 200 response code', async () => {
    const res = await request(app).get('/classes');

    expect(res.statusCode).toEqual(200);
  });

  it('should return empty data when no classes exist', async () => {
    await ClassModel.deleteMany({});
    const res = await request(app).get('/classes');

    expect(res.body).toStrictEqual([]);
  });

  it('should return all classes', async () => {
    await ClassModel.deleteMany({});
    await ClassModel.insertMany([
      { classId: 1, description: 'Class 1' },
      { classId: 2, description: 'Class 2' },
    ]);

    const res = await request(app).get('/classes');

    expect(res.body).toHaveLength(2);
    expect(res.body[0]).toHaveProperty('classId', 1);
    expect(res.body[1]).toHaveProperty('classId', 2);
  });
});
