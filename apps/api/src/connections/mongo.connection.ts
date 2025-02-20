import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connection = () => {
  const db_uri = process.env.MONGO_DB_URI;
  if (!db_uri) {
    throw new Error('No MongoDB URI provided');
  }
  mongoose
    .connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) =>
      console.log('Failed to connect to MongoDB', error.message),
    );
};
