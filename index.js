const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Paradise Photography server is running')
})
app.listen(port,(req,res)=>{
    console.log(`Paradise Photography running on ${port}`)
})