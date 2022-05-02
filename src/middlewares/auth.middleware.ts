import { Request, Response } from "express";
import { prisma } from "..";

export const authSignUpValidations = async (req: Request, res: Response, next: Function) => {

    if (!req.body.userName || !req.body.password) {
        return res.json({ Errores: 'Se debe incluir el usuario y contraseña obligatoriamente' })
    }
    const { userName } = req.body;

    const searchUser = await prisma.user.findFirst({
        where: {
            userName: {
                equals: userName,
                mode: 'insensitive'
            }
        },
        select: {
            userName: true
        }
    })

    if (searchUser) { return res.json({ Errores: 'El usuario ya existe' }) }

    next()
}
