import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";

export function createApp({ clientOrigin }) {
  const app = express();

  app.use(
    cors({
      origin: clientOrigin,
      methods: ["GET", "POST"],
      credentials: false
    })
  );
  app.use(express.json());

  app.get("/api/health", (_request, response) => {
    response.json({
      status: "ok",
      database:
        mongoose.connection.readyState === 1 ? "connected" : "disconnected"
    });
  });

  app.use("/api/contact", contactRoutes);

  app.use((_request, response) => {
    response.status(404).json({
      message: "Route not found."
    });
  });

  return app;
}
