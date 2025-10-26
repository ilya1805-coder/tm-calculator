import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from '../db/connect.js';
import Class from '../models/class.model';
import classesData from './data/classes.json';

const seedClasses = async () => {
  try {
    connectDB();
    console.log('MongoDB connected');

    await Class.deleteMany({});
    console.log('Existing classes removed');

    await Class.insertMany(classesData);
    console.log('Classes seeded successfully');

    await mongoose.disconnect();
  } catch (err) {
    console.error('Seeding error:', err);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedClasses();
