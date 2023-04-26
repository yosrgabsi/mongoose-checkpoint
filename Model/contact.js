const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
name : String,
lastName: String,
age:Number,
email:{
type:String,
required:true,
},
favoriteFoods: String

})


module.export = mongoose.model('contactSchema',contactSchema)