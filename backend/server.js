// I am the server file!
const express = require('express');
require('dotenv').config();
require('colors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/comments', require('./routes/commentRoutes'));
app.use('/api/decorations', require('./routes/decorationRoutes'))


app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));