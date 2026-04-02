import mongoose from "mongoose";
import Contact from "../models/Contact.js";

export async function createContactMessage(request, response) {
  const { name, email, subject, message } = request.body;

  if (!name || !email || !subject || !message) {
    return response.status(400).json({
      message: "All contact fields are required."
    });
  }

  if (mongoose.connection.readyState !== 1) {
    return response.status(503).json({
      message:
        "MongoDB is not connected. Set MONGODB_URI and start the backend with a reachable database."
    });
  }

  try {
    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

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
