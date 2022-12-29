import userModel from '../api/users/userModel';
import genresModel from '../api/genres/genresModel';
import users from './users';
import dotenv from 'dotenv';
import genres from './genres'
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
import tvshows from './tvshows.js';
import tvshowsModel from '../api/tvshows/showModel.js'

import topRatedMoviesModel from '../api/topRatedMovies/topRatedMoviesModel.js';
import  topRatedMovies from './topRatedMovies.js';

dotenv.config();

// deletes all user documents in collection and inserts test data
// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}


async function loadGenres() {
    console.log('load  genre Data');
    try {
      await genresModel.deleteMany();
      await genresModel.collection.insertMany(genres);
      console.info(`${genres.length} gernes were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genreData: ${err}`);
    }
  }


  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}


export async function loadShows() {
  console.log('load seed data');
  console.log(tvshows.length);
  try {
    await tvshowsModel.deleteMany();
    await tvshowsModel.collection.insertMany(tvshows);
    console.info(`${tvshows.length} Shows were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load show Data: ${err}`);
  }
}


export async function loadTopRatedMovies() {
  console.log('load seed data');
  console.log(topRatedMovies.length);
  try {
    await topRatedMoviesModel.deleteMany();
    await topRatedMoviesModel.collection.insertMany(topRatedMovies);
    console.info(`${topRatedMovies.length} top rated were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load top Rated Data: ${err}`);
  }
}

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
  loadMovies();//ADD THIS LINE
  loadShows();
  loadTopRatedMovies(); 
}


//privious "test" commit done due to having error with github uploading the movies-api as a submodule making the files not able to be viewed on github and also not being able to commit new changes to the section of the app. Solution was to use " git rm --cached movies-api" and then re add and commit. This resulted in the entire movies api being commited at once. I had no noticed this error until having made some progress with the assignment upto updating my react app to use the new api calls for movies and tv shows 