import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import notesRouter from "./routes/notes.routes";
import authRouter from "./routes/auth.routes";

const app = express();
export const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
app.use(notesRouter)
app.use(authRouter)

app.get("/", async (req, res) => {
  res.send(
    `
  <h1>Notes REST API</h1>
  <h2>Available Routes</h2>
  <pre>
    GET, POST /todos
    GET, PUT, DELETE /todos/:id
  </pre>
  `.trim(),
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


