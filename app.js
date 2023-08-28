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
        app.listen(5000, () => {
            console.log('Server listening on port 5000')
        })
    })
    .catch((err) => {
        console.log(err)
        console.log('Database connection failed')

        process.exit(1)
    })