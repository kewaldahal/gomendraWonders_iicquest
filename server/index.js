import express from 'express';
import env from 'dotenv';

// route
import blogRoute from './routes/blog.route.js'
import authRoute from './routes/user.route.js'
import chatRoute from './routes/chat.route.js';

env.config();
const app = express();

// route handlers
app.use("/blogs", blogRoute);
app.use("/auth", authRoute);
app.use('/aichat', chatRoute)

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log("HEll yeahhhh");
    console.log(`Running on port ${PORT}`);
})