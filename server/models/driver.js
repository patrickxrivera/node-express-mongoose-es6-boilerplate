import mongoose from 'mongoose';

const { Schema } = mongoose;

const DriverSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('driver', DriverSchema);
