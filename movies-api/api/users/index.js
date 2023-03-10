import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import movieModel from '../movies/movieModel';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// Register OR authenticate a user 
router.post('/',asyncHandler( async (req, res, next) => {
    if (!req.body.username || !req.body.password) {

      res.status(401).json({success: false, msg: 'Please pass username and password.'});
      return next();
    }
    if (req.query.action === 'register') {

      if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(req.body.password)) {

        await User.create(req.body).catch(next);
      } 
      else {
        res.status(401).json({code: 401,msg: 'Authentication failed. Password to weak'});
      }
      res.status(201).json({code: 201, msg: 'Successful created new user.'});
    } 
    else {

      const user = await User.findByUserName(req.body.username);
        if (!user) return res.status(401).json( {
           code: 401, msg: 'Authentication failed. User not found.' 
        } );
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {

            const token = jwt.sign(user.username, process.env.SECRET);

            res.status(200).json({success: true, token: 'BEARER ' + token});
          } 
          else {
            res.status(401).json({code: 401,msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
  }));

// Update a user
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});





export default router;  