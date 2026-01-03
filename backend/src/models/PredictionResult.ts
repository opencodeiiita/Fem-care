import mongoose, { Schema, Document } from "mongoose";

export interface IPredictionResult extends Document {
  userId: mongoose.Types.ObjectId;
  prediction: string;
  confidenceScore: number;
  modelVersion: string;
  createdAt: Date;
}

const PredictionResultSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    prediction: {
      type: String,
      required: true,
    },
    confidenceScore: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },
    modelVersion: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

PredictionResultSchema.index({ userId: 1, createdAt: -1 });

export default mongoose.model<IPredictionResult>(
  "PredictionResult",
  PredictionResultSchema
);
