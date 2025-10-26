import mongoose from 'mongoose';
import config from '../config/index.config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.db.uri, {
      maxPoolSize: 20,
      serverSelectionTimeoutMS: 10000,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
