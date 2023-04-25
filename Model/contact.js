const mongoose = require ('mongoose ')
const contactSchema = mongoose.Schema ({
name : string,
lastName: string,
age: Number,
email:{
type:string,
required:true
},
favoriteFoods: string

})


module.export = mongoose.model('contactSchema',contactSchema)