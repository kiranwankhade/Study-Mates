const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskTitle:{type:String,required:true},
  taskStatus:{type:String,required:true,default:"todo",enum:["todo","inprogress","completed"]},
  deadline: {type:Date,required:true},
  isAssign:{type:Boolean,required:true,default:false},
},
{
  versionKey:false,
  timestamps:true
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
