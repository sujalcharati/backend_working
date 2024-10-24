import axios from "axios";
import React, { useState }  from "react";

export function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handlelogin = async (e)=>{
        e.preventDefault();
        try{

            const res = await axios.post('http://localhost:5000/login', {
                email:email,
                password: password
            })
            const data = res.data;
            console.log('Login successful:', data);
        }
       catch(error) {
        console.error('Login failed:', error.res ? error.res.data.message : error.message);
      }
    };
    return (
        <div>
            <form onClick={handlelogin}>
                <div>
                    <label htmlFor="username">Email:</label>
                    <input type="text" id="username" name="username" className=" text-black"
                    value={email}
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label >Password:</label>
                    <input type="password" id="password" name="password" className=" text-black"
                      value={password}
                      placeholder=" password"

                      onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}