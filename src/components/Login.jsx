import axios from "axios";
import React, { useState }  from "react";

export function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handlelogin = async (e)=>{
        e.preventDefault();
        const res = await axios.post('http://localhost:5173/login', {
            email,
            password
        }, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('login successfully', res.data);


    }
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="username">Email:</label>
                    <input type="text" id="username" name="username" className=" text-white"
                    value={email}
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" className=" text-white "
                      value={password}
                      placeholder=" password"

                      onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" onClick={handlelogin}>Login</button>
            </form>
        </div>
    )
}