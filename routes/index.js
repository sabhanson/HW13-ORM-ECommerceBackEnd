const router = require('express').Router(); //required to use express router
const apiRoutes = require('./api'); //require all of the route files that exist in /api

router.use('/api', apiRoutes);

//this response will send if the user accesses a url that doesn't exist
router.use((req, res) => {
  res.send("<h1>This is not a valid URL path for the E-Commerce database</h1><h2>Try one of these links below:</h2><ul><li><a target=`_blank` href=`https://peaceful-fortress-89750.herokuapp.com/api/categories`>All Categories</a></li><li><a href=`https://peaceful-fortress-89750.herokuapp.com/api/products`>All Products</a></li><li><a href=`https://peaceful-fortress-89750.herokuapp.com/api/tags`>All Tags</a></li></ul>")
});

module.exports = router;