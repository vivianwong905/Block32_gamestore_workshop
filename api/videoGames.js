const express = require('express');
const router = express.Router();



const { getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame } = require('../db/videoGames');

// GET - /api/video-games - get all video games
//these are database adapters 
router.get('/', async (req, res, next) => {
    try {
        const videoGames = await getAllVideoGames();
        res.send(videoGames);
    } catch (error) {
        next(error);
    }
});

// GET - /api/video-games/:id - get a single video game by id
//using params.id
router.get('/:id', async (req, res, next) => {
    try {
        const videoGame = await getVideoGameById(req.params.id);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// POST - /api/video-games - create a new video game
router.post('/', async (req, res, next) => {
    // get the req from the body
    //create a new videogame
    //use postman
    try {
        const videoGame = await createVideoGame(req.body);
        res.send(videoGame);
    } catch (error) {
        next(error);
        }
    
});


// PUT - /api/video-games/:id - update a single video game by id
router.put('/:id', async (req, res, next) => {
    // LOGIC GOES HERE 
    //test in postman
    try {
        const videoGame = await updateVideoGame(req.params.id, req.body);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete('/:id', async (req, res, next) => {
    // LOGIC GOES HERE
    //this is get one ID
    //test in postman
    try {
        const videoGame = await deleteVideoGame(req.params.id);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
