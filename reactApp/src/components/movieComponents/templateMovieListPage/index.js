import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";


//pagination
import MovieFooter from "../footerMovie";
import { MoviesContext } from "../../../contexts/moviesContext";
import  Box  from "@mui/material/Box";




function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  
  const genreId = Number(genreFilter);
  const {pageNumber} = useState(MoviesContext)
 

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
   
  };

  return (
    <>
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
      {/* pagination grid */}
      
    </Grid>
    
    <Grid   item xs = {5} style = {{paddingTop: 20}}>
    <Box display = "flex"
    justifyContent = "center"
    alignItems = "center"
    >
      <MovieFooter title = {pageNumber}/>
    </Box>
  </Grid>
  </>
  );
}
export default MovieListPageTemplate;