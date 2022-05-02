import { Request, Response } from "express";
import { prisma } from "..";


export const getNotes = async (req: Request, res: Response) => {
    const notes = await prisma.note.findMany({
        orderBy: { createdAt: "desc" },
    });
    res.json(notes);
}

export const createNote = async (req: Request, res: Response) => {
    const note = await prisma.note.create({
        data: {
            createdAt: new Date(),
            title: req.body.title,
            content: req.body.content,
            user_id: 'hola'
        }
    });

    return res.json(note);
}

export const getUniqueNote = async (req: Request, res: Response) => {
    const id = req.params.id;
    const note = await prisma.note.findUnique({
        where: { id },
    });

    return res.json(note);
}

export const editNoteById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const note = await prisma.note.update({
        where: { id },
        data: req.body,
    });

    return res.json(note);
}

export const deleteNoteById = async (req: Request, res: Response) => {
    const id = req.params.id;
    await prisma.note.delete({
        where: { id },
    });

    return res.send({ status: "ok" });
}