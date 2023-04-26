const express = require ('express')
const app = express()
const port = 4000
const connectdb = require ('./Config/connectdb')
const contactRoute = require('./Routes/ContactRoute')

connectdb()

app.use(express.json())
app.use('/contact',contactRoute)



app.get('/',(req,res)=>{
    try{
       res.send('welcome')
   }catch(err){console.log(err)}
})
app.listen(port,err=>{
    err? console.log(err): console.log('you did good')
})