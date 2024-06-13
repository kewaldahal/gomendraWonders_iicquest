import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// route
import blogRoute from './routes/blog.route.js'
import authRoute from './routes/user.route.js'
import chatRoute from './routes/chat.route.js';
import confessRoute from './routes/confess.route.js';
import journalRoute from "./routes/journal.route.js"

import connectDB from './config/dbConfig.js';

env.config();
const app = express();
app.use(cors());
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// route handlers
app.use("/blogs", blogRoute);
app.use("/confess", confessRoute);
app.use("/auth", authRoute);
app.use('/aichat', chatRoute)
app.use("/journal", journalRoute)

app.use('/auth', authRoute);

const PORT = process.env.PORT || 8080;


connectDB().then(() => {

    app.listen(PORT, ()=> {
        console.log("HEll yeahhhh");
        console.log(`Running on port ${PORT}`);
    })
})