import express from 'express';
import usersController from '../controllers/users.js';
import { requireToken } from '../middlewares/requireToken.js';

const routerUsers = express.Router();

routerUsers.get('/',requireToken, usersController.getUsers);
routerUsers.get('/:id',requireToken, usersController.getUser);
routerUsers.put('/:id',requireToken, usersController.updateUser);
routerUsers.delete('/:id',requireToken, usersController.deleteUser);


export default routerUsers;
