// load env variables from .env 
require('dotenv').config();

//library imports
const express = require('express');
const serverless = require("serverless-http");
const cors = require('cors');
const mongoose = require('mongoose');

//import routes
const projectRoutes = require('./routes/projectRoutes');   
const contactRoutes = require('./routes/contactRoute');
const userRoutes = require('./routes/userRoutes');


//connect to mongodb
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connected: ${conn.connection.host}`);
    } 
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

//intialize the express app
const app=express();

//use middleware
app.use(express.json());
app.use(cors());


//home routes
app.get('/',(req,res) => {res.send('backend running');} );

//specific routes
app.use('/api/projects', projectRoutes);
app.use('/api/messages', contactRoutes);
app.use('/api/users', userRoutes);

//start the server
/*connectDB().then(() => {
    //define the port(3001)
    const PORT = process.env.PORT || 3001;
    //start the server
    app.listen(PORT, () => {console.log(`server running ${PORT}`);});
})
*/
connectDB()

module.exports = app;
