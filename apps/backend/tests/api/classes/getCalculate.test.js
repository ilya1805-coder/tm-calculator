import request from 'supertest';
import app from '../../../src/app';
import { connectMongoDB, disconnectMongoDB } from '../../helpers';
import PriceModel from '../../../src/models/price.model';
import config from '../../../src/config/index.config';

beforeAll(async () => {
  connectMongoDB();
});

afterAll(async () => {
  disconnectMongoDB();
});

describe(' GET /calculate', () => {
  it('should return 500 response code when no prices are stored', async () => {
    const res = await request(app).get('/calculate');

    expect(res.statusCode).toEqual(500);
  });

  it('should return correct calculated data when prices are stored', async () => {
    await PriceModel.deleteMany({});
    await PriceModel.insertMany([
      {
        priceName: config.tmRegistrationPriceName,
        applicationBase: 1000,
        applicationPerClass: 100,
        registrationBase: 500,
        registrationPerClass: 50,
        search: 200,
        isColored: 300,
        multipleApplicants: 400,
        isExpress: 500,
        discountPercent: 10,
      },
    ]);

    const res = await request(app).get(
      '/calculate?search=true&type=word&isColored=true&multipleApplicants=true&isExpress=true&classes=6'
    );

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      applicationPrice: 2200,
      registrationPrice: 850,
      totalPrice: 2745,
    });
  });
});
