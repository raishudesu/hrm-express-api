import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { employeesRouter } from "./routes/employees.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = Number(process.env.PORT);

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/employees", employeesRouter);

app.listen(PORT, () => {
  console.log(`Listening from port: ${PORT}`);
});

export default app;
