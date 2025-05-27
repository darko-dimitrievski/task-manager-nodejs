const connectDB = require ('./db/connect');
const { response } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const tasks = require('./routes/tasks')
require('dotenv').config();

// middleware
app.use (express.static('./public'))
app.use (express.json())

app.use('/api/v1/tasks', tasks)

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error)
    }
}

start();