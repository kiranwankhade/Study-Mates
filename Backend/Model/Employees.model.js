const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email: {type:String,required:true,unique:true},
  password:{type:String,required:true,min:6,max:10},
  gender: {type:String,required:true},
  designation: {type:String,required:true},
  role:{type:String,required:true,default:"employee",enum:["employee","team-leader"]},
  task:[{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
},
{
  versionKey:false,
  timestamps:true
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
