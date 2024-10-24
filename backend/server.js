import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose';
const app =express();
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const connectDB = async () => {
    const DB='mongodb+srv://sujal:mongosonu@cluster0.oshrs8k.mongodb.net/login'
    try {
        await mongoose.connect(DB);
        console.log(DB)
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};



app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    return res.status(200).json({
        msg: `email: ${email} and password: ${password}`
    });
});

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
