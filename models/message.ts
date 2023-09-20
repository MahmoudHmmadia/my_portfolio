import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
export const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
