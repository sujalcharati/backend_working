import express from 'express';
import connectDB from './db';
import dotenv from 'dotenv';
const cors = require('cors');
app.use(cors());
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.get('/login', (req, res) => {
const email =req.body.email;
const password =req.body.password;
return res.status(200).json({
    msg:`email :${email} and password :${password}`
})
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
