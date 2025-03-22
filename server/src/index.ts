import express from "express";
import cors from "cors";
import gridRouter from "./routes/gridRouter";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);

app.use("/api/", gridRouter);

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export { app, server };