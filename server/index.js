const       express=require('express'),
            bodyParser=require('body-parser'),
            massive=require('massive'),
            ctrl=require('./controller')
            
require('dotenv').config()

const       port = 3010;

const       app=express()

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then( dbInstance =>{
    app.set('db', dbInstance)
    console.log('Database Connected')
    app.listen(port, ()=>console.log(`Hard to port ${port}`))
} ).catch( err => console.log(err))



