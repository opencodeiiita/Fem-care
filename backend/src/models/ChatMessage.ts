import mongoose, { Schema, Document } from "mongoose";

export interface IChatMessage extends Document {
  userId: mongoose.Types.ObjectId;
  role: "user" | "assistant";
  message: string;
  createdAt: Date;
}

// @ts-ignore
const ChatMessageSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    role: {
      type: String,
      enum: ["user", "assistant"],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

ChatMessageSchema.index({ userId: 1, createdAt: -1 });

export default mongoose.model<IChatMessage>(
  "ChatMessage",
  ChatMessageSchema
);
