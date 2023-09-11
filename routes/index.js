const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.jeniHales);
routes.get('/hannah', lesson1Controller.hannahRoute);
routes.get('/bob', lesson1Controller.bobTest);

module.exports = routes;