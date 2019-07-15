const Router = require('express').Router;
var mainRouter = new Router();

let articleRoutes = require('./article');


mainRouter.use('/article', articleRoutes);

module.exports = mainRouter;