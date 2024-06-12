import express from 'express';
import env from 'dotenv';

// route
import blogRoute from './routes/blog.route.js'
import authRoute from './routes/user.route.js'
import chatRoute from './routes/chat.route.js';
import confessRoute from './routes/confess.route.js';

import connectDB from './config/dbConfig.js';

env.config();
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// route handlers
app.use("/blogs", blogRoute);
app.use("/confess", confessRoute);
app.use("/auth", authRoute);
app.use('/aichat', chatRoute)

const PORT = process.env.PORT || 8080;


connectDB().then(() => {

    app.listen(PORT, ()=> {
        console.log("HEll yeahhhh");
        console.log(`Running on port ${PORT}`);
    })
})