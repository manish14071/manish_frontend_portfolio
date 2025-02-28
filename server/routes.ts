import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage.js";
import { insertMessageSchema } from "../shared/schema.js";
export async function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const message = insertMessageSchema.parse(req.body);
      await storage.createMessage(message);
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid message data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
