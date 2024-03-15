import mongoose from 'mongoose';
const { Schema } = mongoose;

const BackendConfigSchema = new Schema({
  wordList: [String],
});

const FrontendConfigSchema = new Schema({
  
});

export const BackendConfig = mongoose.model("BackendConfig", BackendConfigSchema, "BackendConfig");
export const FrontendConfig = mongoose.model("FrontendConfig", BackendConfigSchema, "FrontendConfig");