import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  path: {
    type: String,
  },
});

const Exercise =
  mongoose.models.exercises || mongoose.model("exercises", exerciseSchema);

export default Exercise;
