const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, // this is not considered a validation, it sets up an index
  },
  password: {
    type: String,
    required: true,
  }
},
  { collection: 'user-data' }
)

const model = mongoose.model('UserData', UserSchema)

module.exports = model

// UserSchema.plugin(passportLocalMongoose);

// module.exports = mongoose.model("User", UserSchema);
