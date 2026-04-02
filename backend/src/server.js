import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createApp } from "./app.js";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFilePath);
const repositoryRoot = path.resolve(currentDirectory, "../..");

dotenv.config({ path: path.join(repositoryRoot, ".env") });
dotenv.config();

const port = Number(process.env.PORT || 5000);
const mongoUri = process.env.MONGODB_URI || "";
const host = process.env.HOST || (process.env.RENDER ? "0.0.0.0" : "127.0.0.1");
const clientOrigin = process.env.CLIENT_ORIGIN || "http://127.0.0.1:5173";

async function connectToDatabase() {
  if (!mongoUri) {
    console.warn(
      "MONGODB_URI is not set. Contact submissions will fail until a database connection is configured."
    );
    return;
  }

  await mongoose.connect(mongoUri);
  console.log("MongoDB connected");
}

async function startServer() {
  try {
    await connectToDatabase();

    const app = createApp({ clientOrigin });
    app.listen(port, host, () => {
      console.log(`Backend server listening on http://${host}:${port}`);
    });
  } catch (error) {
    console.error("Failed to start backend server", error);
    process.exit(1);
  }
}

startServer();
