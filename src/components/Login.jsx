import React, { useState }  from "react";

export function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="username">Email:</label>
                    <input type="text" id="username" name="username" className=" text-white"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" className=" text-white"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}