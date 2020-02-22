import express from "express";
import indexRoutes from "./routes/index.routes";
import taskRouters from "./routes/task.routes";
import { json } from "express";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(json());

// Router
app.use(indexRoutes);
app.use("/tasks", taskRouters);

export default app;
