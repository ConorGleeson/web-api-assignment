// // super basic login page for now // will use firebase https://www.youtube.com/watch?v=9bXhf_TELP4&list=PLojo8XsHDJJoDEKxxijp1j2nw5Qt5QwY7&index=2 video tutorial on firebase setup
// import React from "react";
// import Typography from "@mui/material/Typography";
// import { useContext, useState } from "react";

// import Button from '@mui/material/Button';
// import LogoutIcon from '@mui/icons-material/Logout';
// import LoginIcon from '@mui/icons-material/Login';
// import CreateIcon from '@mui/icons-material/Create';
// import Alert from '@mui/material/Alert';

// import TextField from '@mui/material/TextField';
// import { AuthContext } from "../contexts/authContext.js";

// const LoginPage = (props) => {
//    const context = useContext(AuthContext);
//    const [userName, setUserName] = useState("");
//    const [password, setPassword] = useState("");

//    const login = () =>{
//     context.authenticate(userName, password);
//    }

//     return(
//         <div>
//             <div>
//             <Typography align="center" variant="h4" sx={{ flexGrow: 1 }}>
//                 Register
//                 </Typography>
//                 <Typography align="center">
//                 <TextField id="outlined-basic" label="Email" varient = "outlined"  onChange={(event) => { setUserName(event.target.value) }}/>
//                 <TextField type="password" id="outlined-basic" label="Password" varient = "outlined" onChange={(event) => { setPassword(event.target.value) }}/>
//                 </Typography>
//                 <Typography  style = {{padding: 20}}  align="center">
//                 <Button variant="contained"  color="success" endIcon={<CreateIcon />} onClick={login}>Create User</Button>
//                 </Typography>

//             </div>
//             <div>
//             <Typography align="center" variant="h4" sx={{ flexGrow: 1 }}>
//                 Login
//                 </Typography>
//                 <Typography align="center">
//                 <TextField id="outlined-basic" label="Email" varient = "outlined" onChange={(event) => { setUserName(event.target.value) }}/>
//                 <TextField type="password" id="outlined-basic" label="Password" varient = "outlined" onChange={(event) => { setPassword(event.target.value) }}/>
//                 </Typography>
//                 <Typography  style = {{padding: 20}}  align="center">
//                 <Button variant="contained" color="success" endIcon={<LoginIcon />} onClick={login}>Login</Button>
//                 </Typography>
//             </div>
//             </div>

       
//     );
    


    
// }; export default LoginPage

import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext.js";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <input
        id="username"
        placeholder="user name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <br />
      <input
        id="password"
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={login}>Log in</button>
      <p>
        Not Registered?
        <Link to="/signup">Sign Up!</Link>
      </p>
    </>
  );
};

export default LoginPage;