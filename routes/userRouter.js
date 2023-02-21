import { Router } from "express";
import { getposts, addPost, delposts, updateddUser, getcontentt } from '../controller/userController.js'


export const router = Router();

router.put('/:id', updateddUser);
router.delete('/:id', delposts);
router.get('/', getposts);
router.post('/', addPost);
router.get('/:id', getcontentt);
