const express = require('express');
const connection = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express()

connection()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true
}))

app.use(express.json())

app.use(cookieParser())

app.use('/recipeImage', express.static('recipeImage'))

app.use('/api/auth', require('./router/user.router'))
app.use('/api/recipe', require('./router/recipe.router'))

app.listen(process.env.PORT || 5000, () => {
    console.log(`server has started in the port ${process.env.PORT}`);
})