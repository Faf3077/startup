import express from "express";
import { showUsers, createUsers } from "../controllers/product.js";

const router = express.Router();

router.get('/users', showUsers);
router.post('/users', createUsers)
export default router;