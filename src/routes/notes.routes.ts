import { Router } from "express";
import { createNote, deleteNoteById, editNoteById, getNotes, getUniqueNote } from "../controllers/notes.controller";

const notesRouter = Router();

notesRouter.get("/notes", getNotes);

notesRouter.post("/notes", createNote);

notesRouter.get("/notes/:id", getUniqueNote);

notesRouter.put("/notes/:id", editNoteById);

notesRouter.delete("/notes/:id", deleteNoteById);

export default notesRouter;