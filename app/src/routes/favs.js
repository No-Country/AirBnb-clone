import express from 'express';
import favouriteController from '../controllers/favs.js';


const routerFavourite = express.Router();

routerFavourite.post('/:id', favouriteController.addFavorite);
routerFavourite.delete('/:id', favouriteController.removeFavorite);

export default routerFavourite;