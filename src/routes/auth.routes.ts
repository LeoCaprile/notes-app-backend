import { Router } from "express";
import { createUser } from "../controllers/auth.controller";
import { authSignUpValidations } from "../middlewares/auth.middleware";

const authRouter = Router();

//crear usuario
authRouter.post('/user/signup', authSignUpValidations, createUser)

//logear usuario
authRouter.post('/user/signin', async (req, res) => {

})



export default authRouter;