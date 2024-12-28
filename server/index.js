require('dotenv').config();
const express=require('express');
const helmet=require('helmet');
const userRoutes=require('./src/routes/userRoutes.js');
const app=express();
const mongoose=require("mongoose");

const cors=require('cors');
app.use(express.json());


app.use(cors());
app.use(cors({origin:"https://samosa-singh-app.onrender.com",}));

// mongoose.connect('mongodb+srv://<db_username>:<db_password>@logindata.75vtd.mongodb.net/?retryWrites=true&w=majority&appName=LoginData/credentialsData').then(() => {
//     console.log('Database connected');
//   }).catch(err => console.log('Database connection error:', err));
mongoose.connect("mongodb+srv://vsankararao143:Vsankar143@login.jhtsj.mongodb.net/?retryWrites=true&w=majority&appName=login")
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => console.log('Database connection error:', err));



app.use('/',userRoutes);

const port=process.env.PORT || 8080;

app.listen( port,()=>{console.log(`server is running on port http://localhost:${port}`)});

