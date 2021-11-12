const mongoose = require ("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: String,
    Surname: String,
    dateOfBirth: Date,
    Comments: String,
    rol: String

});

module.exports = mongoose.model("Profile", ProfileSchema);
