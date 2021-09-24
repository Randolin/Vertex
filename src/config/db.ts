import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    // database Name
    const con = await mongoose.connect(process.env.MONGODB_URI || '');
    console.log(`Database connected : ${con.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
