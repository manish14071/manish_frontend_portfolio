import {  type Message, type InsertMessage } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
 
  
  
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {


  private messages: Map<number, Message>;

  private messageCurrentId: number;

  constructor() {
    
    this.messages = new Map();
    
    this.messageCurrentId = 1;
  }

  

 
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageCurrentId++;
    const message: Message = {
      ...insertMessage,
      id,
      createdAt: new Date()
    };
    this.messages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
