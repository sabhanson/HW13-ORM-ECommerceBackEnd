const express = require('express');
const routes = require('./routes');
require('dotenv').config();
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
