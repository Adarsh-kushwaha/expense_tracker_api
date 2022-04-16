const express = require('express');
const app = express();
port = process.env.PORT || 5000;
const transacation = require("./routes/transaction")
const connectDB = require('./config/db');

connectDB();
app.use(express.json());

app.use("/api/v1/transactions", transacation)

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})