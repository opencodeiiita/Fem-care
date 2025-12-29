import mongoose, { Schema, Document } from "mongoose";

export interface IPredictionResult extends Document {
  userId: mongoose.Types.ObjectId;
  prediction: string;
  confidence: number;
  modelVersion?: string;
  createdAt: Date;
}

const PredictionResultSchema = new Schema<IPredictionResult>(
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
    confidence: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },
    modelVersion: {
      type: String,
    },
  },
  { timestamps: true }
);

PredictionResultSchema.index({ userId: 1, createdAt: -1 });

export default mongoose.model<IPredictionResult>(
  "PredictionResult",
  PredictionResultSchema
);
