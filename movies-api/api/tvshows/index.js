import express from 'express';
import { shows, showReviews, showDetails } from './tvshowsData.js';
import {
    getUpcomingMovies
  } from '../tmdb-api';



import showModel from './showModel';
import asyncHandler from 'express-async-handler';

import uniqid from 'uniqid'; 

const router = express.Router(); 
router.get('/', asyncHandler(async (req, res) => {
    const shows = await showModel.find();
    res.status(200).json(shows);
}));

// Get show details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const show = await showModel.findByShowDBId(id);
    if (show) {
        res.status(200).json(show);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get show reviews
router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (showReviews.id == id) {
        res.status(200).json(showReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;