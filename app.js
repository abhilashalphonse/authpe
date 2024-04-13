const express = require("express");
const app = express();
const cors = require("cors");


//middleware
app.use(express.json());
app.use(cors())


module.exports = app;

const billingRouter = require("./routes/route");
app.use("/api/billing", billingRouter);

// Connecting to MongoDB
const mongoose = require('mongoose')
mongoose
    .connect('', {
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
