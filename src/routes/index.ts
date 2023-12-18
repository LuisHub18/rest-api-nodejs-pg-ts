import {Router} from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/index.controller";

const router = Router();

router.get('/users', getUsers); 
router.post('/users', createUser);
router.get('/users/:id', getUserById); 
router.put('/users/:id', updateUser); 
router.delete('/users/:id', deleteUser); 

export default router;