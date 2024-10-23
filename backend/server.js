import express from 'express';
import connectDB from './db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.get('/', (req, res) => {
    res.json({ message: 'Hello from the server!' });
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
