import express from 'express';
import favouriteController from '../controllers/favs.js';
import { requireToken } from '../middlewares/requireToken.js';


const routerFavourite = express.Router();

routerFavourite.post('/:id',requireToken, favouriteController.addFavorite);
routerFavourite.delete('/:id',requireToken, favouriteController.removeFavorite);

export default routerFavourite;