import 'dotenv/config';
import app from './src/app';
import { connectDB } from './src/db/connect.js';
import config from './src/config/index.config.js';

//Connect to MongoDB
connectDB();

app.listen(config.server.port);
