import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    email:{
         type: String, 
         required: true 
        },
    password:{
         type: String,
          required: true
         }
});
export default mongoose.model('user', userschema);
