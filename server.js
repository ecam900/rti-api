const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

// Load env vars
dotenv.config({
  path: './config/config.env'
});

// Route files
const items = require('./routes/items');

const app = express();

// Body Parser
app.use(express.json());

// Mount routers
app.use('/api/v1/items', items);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.rainbow
      .bold
  )
);
