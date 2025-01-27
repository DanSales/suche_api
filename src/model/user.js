const mongoose = require('../database');
const simplecrypt = require('simplecrypt'); //criptografar senha
const sc = simplecrypt({salt: "10"});
//Contruindo Modelo do Usuario
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    lowercase: true,
    select: false,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  gender: {
    type: String,
    lowercase: true,
    required: true,
  },
  //Recebe os dados no padrão DATE
  birthDate: {
    type: Date,
    required: true,
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function(next) {
  //const salt = await bcrypt.genSalt(10);
  // passando para hashed password
  //this.password = await sc.encrypt(this.password);
  // console.log(this.password);
  //const hash = await bcrypt.hash(this.password, 10);
  //this.password = hash;

  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;