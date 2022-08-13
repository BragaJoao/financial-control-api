require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./database/database')
const incomesRoute = require('./Income/income.routes')

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());

app.use('/finances', incomesRoute);

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`)
});