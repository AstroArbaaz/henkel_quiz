const mongoose = require('mongoose');
const { Schema } = mongoose;

const leaderboardSchema = new Schema({
   name: String,
   score: Number,
   time: String
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);