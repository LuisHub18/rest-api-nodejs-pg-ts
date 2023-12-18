import {Router} from "express";
import * as controller from "../controllers/index.controller";

const router = Router();

router.get('/users', controller.getUsers); 
router.post('/users', controller.createUser);
router.get('/users/:id', controller.getUserById); 
router.put('/users/:id', controller.updateUser); 
router.delete('/users/:id', controller.deleteUser); 

export default router;