const Leaderboard = require('../models/leaderboard');

exports.newLeaderboard = (req, res) => {
    const name = req.body.name;
    const score = req.body.score;
    const time = req.body.time;

    const createLeader = new Leaderboard({
        name: name,
        score: score,
        time: time
    });

    // console.log(createLeader);

    return createLeader
        .save()
        .then(() => {
            res
                .status(201)
                // .json({ message: "User registered!", createLeader: result });
                .redirect("/leaderboard");
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err)
        });
};