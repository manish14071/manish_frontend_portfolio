import { z } from "zod";
export const messageSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
    createdAt: z.date()
});
export const insertMessageSchema = messageSchema.omit({ id: true, createdAt: true });
