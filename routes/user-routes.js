import express from "express";
const  router = express.Router();
import {gtAllUser, login, signup} from "../controllers/usercontroller.js";
router.get('/',gtAllUser);
router.post('/signup',signup);
router.post('/login',login);


export default router;
