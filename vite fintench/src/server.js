const express = require('express');
const cors = require('cors');
const  connect  = require('./config/config.db');
const authRouter = require('./controller/auth.controller');
const port = process.env.DB_PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth',authRouter);
app.listen(port, async ()=>{
    await connect();
    console.log(`listening on port: ${port}`);
})