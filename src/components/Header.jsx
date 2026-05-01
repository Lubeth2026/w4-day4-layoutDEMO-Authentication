
import React, { useState } from 'react'
import { supabase } from '../utils/supabase';

export default function Header() {
//Authentication//
//CREATE a user in the Database//
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignup() {
        console.log(username, password);
        try {
            const { data, error } = await supabase.auth.signUp({ email: username, password: password });
            if(error) console.log(error);
            console.log(data);
            setUser(data);
        } catch (error) {
            console.log("Couldn't Sign Up..");    
        }
    }
    async function handleLogin() {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email: username,password: password });
            if (error) console.log(error);
            console.log(data);
            setUser(data);
        } catch (error) {
            console.log("Couldn't Login..");
        }
    }
    async function logout() {
        try {
            const { data } = await supabase.auth.signOut();
            console.log(data);
            setUser(null);
        } catch (error) {
            console.error(error);    
        }
    }
    
  return (
    <header>
        <h1>Test!</h1>
        <label htmlFor="email">Email:
            <input type="email" name="email" id="email" value={username} 
            onChange={(event)=> setUsername(event.target.value)}/>
        </label>
        <label htmlFor="password">Password:
            <input type="password" name="password" id="password" value={password}
            onChange={(event)=> setPassword(event.target.value)}/>
        </label>
        {!user ? ( <>
        <button onClick={handleSignup}>Sign Up</button>
        <button onClick={handleLogin}>Login</button>
        </> ) : (
        <button onClick={logout}>Logout</button> )}
    </header>
  )
}
