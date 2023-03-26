import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todosRouter from "./todos";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/api/todos", todosRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
