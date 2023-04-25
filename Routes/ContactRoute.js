const express = required ('express')
const contactSchema = require ('./model/contact')
const ContactRoute = express.Router()



//Route : get all contact
//===>  http://localhost:4000/contact/getcontact



ContactRoute.get('/getcontact',async (req,res)=> {
    try{
        const contact=  await contactSchema.find()
        res.status(200).json({msg: ' you got all the users', contact})

    }catch(err){
        console.log(err)
        res.send("there is a problem")
    }
})




//Route: post or add contact
//===>  http://localhost:4000/contact/addcontact

ContactRoute.post('/addcontact',async (req,res)=> {
    try{
        const newContact= new contactSchema(req.body)
         await newContact.save()

        res.status(200).json({msg: 'successfully added', newContact})

    }catch(err){
        console.log(err)
        res.send("there is a problem")
    }
})






//Route:update contact
//===>  http://localhost:4000/contact/updatecontact/:id

ContactRoute.put('/updatecontact/:id',async (req,res)=> {
    try{
        const {id}= req.params
        const updateduser=   await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg: ' contact updated successfully', updateduser})

    }catch(err){
        console.log(err)
        res.send("there is a problem")
    }
})





//Route: delete contact
//===>  http://localhost:4000/contact/deletecontact/:id

ContactRoute.delete('/deletecontact/:id',async (req,res)=> {
    try{
        const {id}= req.params
        const deleteduser=   await contactSchema.findByIdAndDelete(id)
        res.status(200).json({msg: ' contact deleted successfully'})

    }catch(err){
        console.log(err)
        res.send("there is a problem")
    }
})




// Route: get unique contact
//===>  http://localhost:4000/contact/getUnqcontact/:id

ContactRoute.get('/getUnqcontact/:id',async (req,res)=> {
    try{
        const {id}= req.params
        const getUnquser=   await contactSchema.findById(id)
        res.status(200).json({msg: '  ur unique contact',getUnquser})

    }catch(err){
        console.log(err)
        res.send("there is a problem")
    }
})


module.exports = ContactRoute 