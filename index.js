const express = require('express');
const app = express();
const mongoose = require('mongoose');
const donenv = require('dotenv');

//Import Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

donenv.config();
//Connect to DB
mongoose.connect(process.env.DB_CONNECT
,{useNewUrlParser: true}
,() => console.log('Connected to DB!'));

//Middlewares
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoutes);
app.use('/api/product', productRoutes);

app.listen(3500, () => console.log('Server Up and running'));
