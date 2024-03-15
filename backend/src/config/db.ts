import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const databaseName = process.env['MONGODB_DBNAME'] || 'VertexDEV';
    const con = await mongoose.connect(process.env['MONGODB_URI'] || `mongodb://127.0.0.1:27017/`, {
      dbName: databaseName,
    });
    console.log(`Database Connected : ${databaseName} at ${con.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;