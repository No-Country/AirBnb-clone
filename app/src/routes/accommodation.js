import express from 'express';
import accControllers from '../controllers/accommodation.js'
import { requireToken } from '../middlewares/requireToken.js';

const routerAcc = express.Router();

routerAcc.get('/',accControllers.getAcc)
routerAcc.get('/user/:id',accControllers.getUserAcc)
routerAcc.get('/:id',accControllers.getAccById)
routerAcc.post('/',requireToken, accControllers.addAcc)
routerAcc.put('/:id',requireToken, accControllers.editAcc)
routerAcc.delete('/:id',requireToken, accControllers.deleteAcc)

export default routerAcc;
