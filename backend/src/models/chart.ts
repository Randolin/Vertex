import mongoose from 'mongoose';
const { Schema } = mongoose;

const ChartSchema = new Schema({
  publicId: String,
  privateId: String,
  active: { type: Boolean, default: true },
  createDate: { type: Date, default: Date.now },
  lastAccessed: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
  lastViewed: { type: Date, default: Date.now },
});

const Chart = mongoose.model("Chart", ChartSchema, "Charts");
export default Chart;