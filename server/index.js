require('dotenv').config();
const express=require('express');
const helmet=require('helmet');
const userRoutes=require('./src/routes/userRoutes.js');
const app=express();
const mongoose=require("mongoose");

const cors=require('cors');
app.use(express.json());



app.use(cors());

mongoose.connect('mongodb://localhost:27017/credentialsData').then(() => {
    console.log('Database connected');
  }).catch(err => console.log('Database connection error:', err));

app.use('/',userRoutes);

const port=process.env.PORT || 8080;

app.listen( port,()=>{console.log(`server is running on port http://localhost:${port}`)});

