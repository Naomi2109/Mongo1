const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    login: String,
    Password: String,

});


const ProfileSchema = new mongoose.Schema({
    name: String,
    Surname: String,
    dateOfBirth: Date,
    Comments: String,
    rol: String

});


const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String

});

module.exports = mongoose.model("User", UserSchema, "user");
module.exports = mongoose.model("Credentials", CredentialsSchema, "user");
module.exports = mongoose.model("Profile", ProfileSchema);

