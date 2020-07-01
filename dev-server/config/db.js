import mongoose from 'mongoose';

export default function connectDB() {
  mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    error => {
      if (error) {
        console.log('Unable to connect to database');
        throw error;
      } else {
        console.log('Connected to MondoDB!');
      }
    }
  );
}
