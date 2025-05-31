const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const rateLimiter = require('./middlewares/rateLimiter');
const logger = require('./middlewares/loger');
const errorHandler = require('./middlewares/errorHandler');
const { connectMongo } = require('./config/db.mongo');
const { connectPostgres } = require('./config/db.pg');
const reviewRoutes = require('./routes/reviewRoutes');
const locationRoutes = require('./routes/locationRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const kpiRoutes = require('./routes/kpiRoutes');
dotenv.config();

connectMongo();
connectPostgres();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimiter);
app.use(logger);



app.use('/api/locations', locationRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/kpi', kpiRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/partner', require('./routes/partnerRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/inquiry', require('./routes/inquiryRoutes'));
app.use('/api/portfolio', require('./routes/portfolioRoutes'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
