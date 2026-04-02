import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import { validateContactPayload } from "../utils/contactValidation.js";

export async function createContactMessage(request, response) {
  const validation = validateContactPayload(request.body);

  if (!validation.ok) {
    return response.status(validation.status).json({
      message: validation.message
    });
  }

  if (mongoose.connection.readyState !== 1) {
    return response.status(503).json({
      message:
        "MongoDB is not connected. Set MONGODB_URI and start the backend with a reachable database."
    });
  }

  try {
    const contact = await Contact.create(validation.value);

    return response.status(201).json({
      message: "Contact message stored successfully.",
      id: contact.id
    });
  } catch (error) {
    return response.status(500).json({
      message: "Failed to store contact message."
    });
  }
}
