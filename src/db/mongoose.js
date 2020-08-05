const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})


// const me = new User({
//   name: 'Nilesh',
//   age: 21,
//   email: 'nileshdas50@gmail.com',
//   password: 'res'
// })
//
// me.save().then(()=>{
//   console.log(me)
// }).catch((error) => {
//   console.log('Error!', error);
// })
// 
// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   completed: {
//     type : Boolean,
//     default: false
//   }
//
//
// })
//
// const task = new Task({
//   description: 'Eat Lunch',
// })
//
// task.save().then(()=>{
//   console.log(task);
// }).catch((error) => {
//   console.log(error);
// })
