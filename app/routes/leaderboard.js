const express = require('express');
const leaderboardController = require('../controllers/leaderboard');


const router = express.Router();


router.post('/register', leaderboardController.newLeaderboard);


module.exports = router;