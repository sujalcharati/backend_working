import React  from "react";

export function Login(){
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" className="border-black text-white" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" className="bg-black text-white" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
