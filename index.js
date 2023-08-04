const express = require('express');
// secure the secret data
const dotenv = require('dotenv');
// call env file 
dotenv.config({path:'./config.env'});
// to get the input values from the client side
const bodyParser = require('body-parser');
// call routes
const productRoutes = require('./routes/productRoutes');

// connect Databse
const db = require('./config/mongoose');

// create express application
const app = express();
// port number
const PORT = process.env.PORT;

// convert the client data in json format
app.use(bodyParser.json());

// add /products before the url path
app.use('/products', productRoutes);


// server listener at given port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
