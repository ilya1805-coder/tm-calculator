import express from 'express';
import cors from 'cors';
import classRoutes from '@/routes/class.route';
import calculatorRoutes from '@/routes/calculator.route';
import { errorHandler } from '@/middlewares/error-handler.middleware';
import { parseQueryParams } from '@/middlewares/parse-query-params.middleware.js';
import config from '@/config/index.config.js';

const app = express();

// Enable CORS requests from frontend
app.use(
  cors({
    origin: config.server.frontentUrl,
  })
);

//Expands request with parsedQuery property
app.use(parseQueryParams);

// Maps URL-encoded payloads to request
app.use(express.urlencoded({ extended: true }));
// Maps JSON payloads to request
app.use(express.json());

//Routing
app.use('/classes', classRoutes);
app.use('/calculate', calculatorRoutes);

app.get('/error', () => {
  throw new Error('Manual test error!');
});

//Errors handling
app.use(errorHandler);

export default app;
