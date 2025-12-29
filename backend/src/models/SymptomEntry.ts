import mongoose, { Schema, Document } from "mongoose";

export interface ISymptomEntry extends Document {
  userId: mongoose.Types.ObjectId;
  symptoms: string[];
  severity?: number;
  notes?: string;
  createdAt: Date;
}

const SymptomEntrySchema = new Schema<ISymptomEntry>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    symptoms: {
      type: [String],
      required: true,
    },
    severity: {
      type: Number,
      min: 1,
      max: 5,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

// Index for user history sorted by time
SymptomEntrySchema.index({ userId: 1, createdAt: -1 });

export default mongoose.model<ISymptomEntry>(
  "SymptomEntry",
  SymptomEntrySchema
);
