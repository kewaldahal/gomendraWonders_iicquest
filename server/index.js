import express from 'express';
import env from 'dotenv';

env.config();
const app = express();

const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.json({
        "message": "Testinggg",
    })
})

app.listen(PORT, ()=> {
    console.log("HEll yeahhhh");
    console.log(`Running on port ${PORT}`);
})