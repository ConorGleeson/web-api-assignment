// super basic login page for now // will use firebase https://www.youtube.com/watch?v=9bXhf_TELP4&list=PLojo8XsHDJJoDEKxxijp1j2nw5Qt5QwY7&index=2 video tutorial on firebase setup
import React from "react";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase-config.js'
import {onAuthStateChanged} from 'firebase/auth'
import {signOut} from 'firebase/auth'
import {signInWithEmailAndPassword} from 'firebase/auth'
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import CreateIcon from '@mui/icons-material/Create';
import Alert from '@mui/material/Alert';

import TextField from '@mui/material/TextField';

function LoginPage(){
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    //error
    const[error, setError]= useState("");
    


    const [user, setUser] = useState({});
    useEffect(() => {

        onAuthStateChanged(auth, (currentUser) => {
    
            setUser(currentUser);
    
        });
    
    }, )

    //firebase uses async await
    const register = async () =>{
        try{
      const user =  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      //console.log(user)
        }catch(error){
            setError(error.message)
            console.log(error.message)
        }
    };

    const login = async () =>{
        try{
            const user =  await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            //console.log(user)
              }catch(error){
                setError(error.message)
                  console.log(error.message)
              }

    };

    const logout = async () => { 
        await signOut(auth)

    };
    return(
        <div>
            <div>
            <Typography align="center" variant="h4" sx={{ flexGrow: 1 }}>
                Register
                </Typography>
                <Typography align="center">
                <TextField id="outlined-basic" label="Email" varient = "outlined"  onChange={(event) => { setRegisterEmail(event.target.value) }}/>
                <TextField type="password" id="outlined-basic" label="Password" varient = "outlined" onChange={(event) => { setRegisterPassword(event.target.value) }}/>
                </Typography>
                <Typography  style = {{padding: 20}}  align="center">
                <Button variant="contained"  color="success" endIcon={<CreateIcon />} onClick={register}>Create User</Button>
                </Typography>

            </div>
            <div>
            <Typography align="center" variant="h4" sx={{ flexGrow: 1 }}>
                Login
                </Typography>
                <Typography align="center">
                <TextField id="outlined-basic" label="Email" varient = "outlined" onChange={(event) => { setLoginEmail(event.target.value) }}/>
                <TextField type="password" id="outlined-basic" label="Password" varient = "outlined" onChange={(event) => { setLoginPassword(event.target.value) }}/>
                </Typography>
                <Typography  style = {{padding: 20}}  align="center">
                <Button variant="contained" color="success" endIcon={<LoginIcon />} onClick={login}>Login</Button>
                </Typography>
            </div>
            <div>
            <Typography   align="center">
            {error ? 
                    <Alert severity="error">
                         {error} 
                    </Alert>
                    : null}
        
            
                </Typography>
            <Typography align="center" variant="h4" sx={{ flexGrow: 1 }}>
                User:
                </Typography>
                <Typography align="center">
                {user ? user.email : "Not Logged In"}
                </Typography>
            </div>
            <div>
            <Typography  style = {{padding: 20}}  align="center">
                <Button  variant="contained" color="error" endIcon={<LogoutIcon />} onClick={logout}>Sign Out</Button>
                </Typography>
                

            </div>
        </div>
    )   


    
} export default LoginPage