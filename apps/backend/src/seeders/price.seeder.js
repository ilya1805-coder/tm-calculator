import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from '../db/connect.js';
import Price from '../models/price.model';
import pricesData from './data/prices.json';

const seedPrices = async () => {
  try {
    connectDB();
    console.log('MongoDB connected');

    await Price.deleteMany({});
    console.log('Existing prices removed');

    await Price.insertMany(pricesData);
    console.log('Prices seeded successfully');

    await mongoose.disconnect();
  } catch (err) {
    console.error('Seeding error:', err);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedPrices();
