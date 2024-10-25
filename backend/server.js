import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose';
import user from './model/user.js';
const app =express();
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const connectDB = async () => {
    const DB='mongodb+srv://sujal:mongosonu@cluster0.oshrs8k.mongodb.net/login/user'
    try {
        await mongoose.connect(DB);
        console.log(DB)
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};



app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
   try {
    const newuser= new user({
        username,
        password
    })
    await newuser.save();
    return res.status(200).json({
        msg:'user loggined succesfully'
    })
   }
   catch(err){
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
   }
});

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
