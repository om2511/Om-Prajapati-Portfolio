import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";

export function createApp({ clientOrigin }) {
  const app = express();
  const allowedOrigins = clientOrigin
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
          callback(null, true);
          return;
        }

        callback(new Error("CORS origin not allowed."));
      },
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
