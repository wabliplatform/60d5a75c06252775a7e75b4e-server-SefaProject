
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
Underscoreid:String , 
formName:String , 
formEmail:String 

})



module.exports = {
  Form : mongoose.model('form', formSchema),
}

