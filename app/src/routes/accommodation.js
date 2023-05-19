import express from 'express';
import accControllers from '../controllers/accommodation.js'

const routerAcc = express.Router();

routerAcc.get('/', accControllers.getAcc)
routerAcc.get('/:id', accControllers.getAccById)
routerAcc.post('/', accControllers.addAcc)
routerAcc.put('/:id', accControllers.editAcc)
routerAcc.delete('/:id', accControllers.deleteAcc)


export default routerAcc;
