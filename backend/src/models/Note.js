import mongoose from "mongoose";

// Create a Schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// Create a model based off  of that schema
const Note = mongoose.model("Note", noteSchema);

export default Note;
