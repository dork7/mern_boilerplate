const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://dork7:hitler564@cluster0-7kxtv.mongodb.net/test?retryWrites=true&w=majority', 
{ useNewUrlParser :true , useUnifiedTopology: true })
.then( () => console.log("DB Connected")).catch(err => console.error(err))

app.get('/', function (req, res) {
    res.send('hello world')
  })

app.listen(5000);