import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

//pagination
import Pagination from '@mui/material/Pagination';
//import { MoviesContext } from "../../../contexts/moviesContext";

const MovieFooter = (props) => {
//const {pageNumber} = useContext(MoviesContext)
  const navigate = useNavigate();

  const setPageNum = (newNumber) =>{
    // const num = parseInt(pageNumber) + parseInt(newNumber)
    const num = parseInt(newNumber)
     if(num <= 0 ) return; 

    // console.log(`--${pageNumber} + ${pageNum}`)
    navigate(`/${num}`, {replace:true})
  }

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      {/* <IconButton aria-label="go back" onClick={() => setPageNum(-1)} >
        <ArrowLeftIcon color="primary" fontSize="large" />
      </IconButton>
      
      <IconButton aria-label="go forward" onClick={() => setPageNum(+1) } >
        <ArrowRightIcon color="primary" fontSize="large" />
      </IconButton> */}

      <Pagination color="secondary"  count={1000}  onChange={(event, page) => setPageNum(page)}></Pagination>
    </Paper>
  );
};

export default MovieFooter;