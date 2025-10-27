import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import classRoutes from '@/routes/class.route';
import calculatorRoutes from '@/routes/calculator.route';
import authRoutes from '@/routes/auth.route';
import { errorHandler } from '@/middlewares/error-handler.middleware';
import { parseQueryParams } from '@/middlewares/parse-query-params.middleware.js';
import { authenticateToken } from '@/middlewares/auth.middleware';
import config from '@/config/index.config.js';

const app = express();

// Enable CORS requests from frontend
app.use(
  cors({
    origin: config.server.frontentUrl,
    credentials: true,
  })
);

//Expands request with parsedQuery property
app.use(parseQueryParams);

// Maps URL-encoded payloads to request
app.use(express.urlencoded({ extended: true }));
// Maps JSON payloads to request
app.use(express.json());

app.use(cookieParser());

//Routing
app.use('/classes', classRoutes);
app.use('/calculate', calculatorRoutes);
app.use('/', authRoutes);

app.get('/dashboard-data', authenticateToken, async (req, res) => {
  return res.json({ a: 1 });
});

//Errors handling
app.use(errorHandler);

export default app;
