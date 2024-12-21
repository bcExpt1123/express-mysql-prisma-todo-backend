import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import taskRoutes from "./routes/task";
import errorHandler from "./middlewares/errorHandler";
import multer from "multer";

const upload = multer()

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/tasks", upload.none(), taskRoutes);
app.use(errorHandler);

export default app;
