import express from "express";
import { showUsers} from "../controllers/product.js";

const router = express.Router();

router.get('/users', showUsers);
export default router;