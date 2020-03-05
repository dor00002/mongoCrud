const mongoose = require("mongoose");

//const Class = require("./Class");

const schema = new mongoose.Schema({
  firstName: {Type:String, Required: true, maxlength: 64},
  lastName: {Type: String, Required: true, maxlength: 64},
  NickName: {Type: String, Required: false, maxlength: 64},
  email: {Type: String, Required: true, maxlength: 512}
});

const Model = mongoose.model("Student", schema);

module.exports = Model;