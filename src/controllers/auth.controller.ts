import { Request, Response } from "express";
import { prisma } from "..";
import { hashPassword } from "../utils/bcrypt.utils";


export const createUser = async (req: Request, res: Response) => {

    const { userName, password } = req.body;

    const hashedPassword = hashPassword(password);

    const user = await prisma.user.create({
        data: {
            userName: userName,
            password: hashedPassword
        }
    })

    return res.json(user);

}