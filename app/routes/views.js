const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/leaderboard')

router.get('/', (req, res) => {
    res.render("index");
})

router.get('/quiz', (req, res) => {
    res.render("quiz");
})

router.get('/end', (req, res) => {
    res.render("end");
})

router.get('/leaderboard', async (req, res) => {

    // Leaderboard.find({}, function (err, details) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.render("test-leaderboard", { details: details })
    //     }
    // })
    try{
        const details = await Leaderboard.find({}).sort({ score: 'desc'});
        res.status(200).render('test-leaderboard', {details: details});
    }
    catch(err){
        res.status(400).json({
            message: "failed to sort",
            error: err, 
        })
    }

})

module.exports = router;