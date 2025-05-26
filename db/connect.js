const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://admin:admin@nodeexpressprojects.zitr3jq.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects'

const connectDB = (url) =>  { return mongoose.connect(url)}

module.exports = connectDB;