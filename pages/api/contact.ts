import { Message } from "@/models/message";
import { connectToDb } from "@/utils/db";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  try {
    await connectToDb();
    const { name, message } = req.body;
    await Message.create({
      content: message,
      name,
    });
    res.json({
      content: "I receive Your Message!, And I Will Get In Touch With You Soon",
      type: "ok",
    });
  } catch (err) {
    console.log(err, "ERROR_MESSAGES");
    return res.json({
      content: "The Server Is Not Working Write Now, Try Again Later",
      type: "bad",
    });
  }
}
