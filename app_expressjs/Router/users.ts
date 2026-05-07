import { Router } from "express"
import usersController from "../Controller/usersController.js";

const router = Router();

router.get('/', usersController.login) 
router.post('/', usersController.checkLogin) 

export default router;