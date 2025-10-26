import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  classId: { type: Number, required: true, unique: true },
  description: { type: String, required: true },
});
const Class = mongoose.model('class', ClassSchema);

export default Class;
