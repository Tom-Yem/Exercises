require('express-async-errors');
const register = require('./routes/register');
const login = require('./routes/login');
const students = require('./routes/students');
const staff = require('./routes/staff');
const users = require('./routes/users');
const error= require('./middlewares/errorHandler');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');

mongoose.connect(config.get('db'),{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true})
.then( () => console.log('Connected to mongodb.'))
.catch( () => console.log('Failed to connect.')) 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/register',register);
app.use('/api/login',login);
app.use('/api/students',students);
app.use('/api/staff',staff);
app.use('/api/users',users);

app.use(error);

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}`));