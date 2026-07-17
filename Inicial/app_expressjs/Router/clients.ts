import { Router } from "express"
import clientsController from "../Controller/clientsController.js";

const router = Router();

router.get('/', clientsController.index) 


router.get('/clients/create', clientsController.create)
router.post('/clients/create', clientsController.store)

router.get('/clients/edit/:id', clientsController.edit)
router.post('/clients/edit/:id', clientsController.update)
router.get('/clients/del/:id', clientsController.del)
router.get('/clients/:id', clientsController.show)

export default router;