const mongoose = require("mongoose");

//const Class = require("./Class");

const schema = new mongoose.Schema({
  firstName: {type: String, required: true, maxlength: 64},
  lastName: {type: String, required: true, maxlength: 64},
  NickName: {type: String, required: false, maxlength: 64},
  email: {type: String, required: true, maxlength: 512}
});

const Model = mongoose.model("Student", schema);

module.exports = Model;