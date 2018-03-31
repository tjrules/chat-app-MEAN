const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/chat');

mongoos.connection.on('open', () => {
  console.log('connected to mongo server');
});

mongoos.connection.on('error', ()=> {
  console.log('Could not connect to mongo server', err);
});

mongoose.connect('mongodb://localhost/mongodb');

module.exports.user = mongoose.model('User', new Schema({
  name:String,
  handle:String,
  password:String,
  phone:String,
  email:String,
  friends:[]
},{strict: false}));

module.exports.online = mongoose.model('online', new Schema({
  handle:String,
  connection_id:String
}));

module.exports.messages = mongoose.model('message', new Schema({
  message:String,
  sender:String,
  receiver:String,
  date:Date
}));
