import express from 'express';
import usersController from '../controllers/users.js';

const routerUsers = express.Router();

routerUsers.get('/',  usersController.getUsers);
routerUsers.get('/:id',  usersController.getUser);
routerUsers.post('/',  usersController.registerUser);
routerUsers.put('/:id',usersController.updateUser);
routerUsers.delete('/:id', usersController.deleteUser);

export default routerUsers;
