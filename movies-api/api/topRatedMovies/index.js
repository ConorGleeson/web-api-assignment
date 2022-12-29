import express from 'express';
import { topRatedMovies, movieReviews, movieDetails } from './topRatedMoviesData';



import topRatedMoviesModel from './topRatedMoviesModel';
import asyncHandler from 'express-async-handler';

import uniqid from 'uniqid'; 

const router = express.Router(); 
router.get('/', asyncHandler(async (req, res) => {
    const topRatedMovies = await topRatedMoviesModel.find();
    res.status(200).json(topRatedMovies);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const topRatedMovie = await topRatedMoviesModel.findByMovieDBId(id);
    if (topRatedMovie) {
        res.status(200).json(topRatedMovie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// // Get movie reviews
// router.get('/:id/reviews', (req, res) => {
//     const id = parseInt(req.params.id);
//     // find reviews in list
//     if (movieReviews.id == id) {
//         res.status(200).json(movieReviews);
//     } else {
//         res.status(404).json({
//             message: 'The resource you requested could not be found.',
//             status_code: 404
//         });
//     }
// });


// //Post a movie review
// router.post('/:id/reviews', (req, res) => {
//     const id = parseInt(req.params.id);

//     if (movieReviews.id == id) {
//         req.body.created_at = new Date();
//         req.body.updated_at = new Date();
//         req.body.id = uniqid();
//         movieReviews.results.push(req.body); //push the new review onto the list
//         res.status(201).json(req.body);
//     } else {
//         res.status(404).json({
//             message: 'The resource you requested could not be found.',
//             status_code: 404
//         });
//     }
// });

// router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
//     const upcomingMovies = await getUpcomingMovies();
//     res.status(200).json(upcomingMovies);
//   }));



export default router;