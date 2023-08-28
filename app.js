const express = require("express");
const app = express();

//middleware
app.use(express.json());

module.exports = app;

const billingRouter = require("./routes/route");
app.use("/api/billing", billingRouter);

// Connecting to MongoDB
const mongoose = require('mongoose')
mongoose
    .connect('mongodb+srv://abhilashalphonse1:2aB4oUSMVcIWH2Cw@cluster0.as6utek.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB database')

        // Starting NodeJS server
       let port = process.env.PORT || 3000;

       app.listen(port, () => {
       console.log(`app running on ${port} `);
 
        })
    })
    .catch((err) => {
        console.log(err)
        console.log('Database connection failed')

        process.exit(1)
    })
