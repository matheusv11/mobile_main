const routes= require('express').Router();

const UserController= require('./controllers/UserController')
const ContentController= require('./controllers/ContentController');
const ProfileController= require('./controllers/ProfileController');
const AuthController= require('./controllers/AuthController');

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

routes.get('/content/', ContentController.index);
routes.post('/content', ContentController.create);
routes.delete('/content/:id', ContentController.delete);

routes.post('/auth', AuthController.create);

routes.get('/profile', ProfileController.index)
module.exports= routes;