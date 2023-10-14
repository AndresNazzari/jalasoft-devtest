require('dotenv').config();
const express = require('express');
const cors = require('cors');
const UserRoute = require('./routes/api/user.routes');
const { corsOptions } = require('./config/cors.config.js');

const app = express();

/****Middlewares*****/
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/****Routes*****/
app.use('/api/user', new UserRoute());

app.get('/', (req, res) => {
    res.json({ message: 'hello ffrom api' });
});

/****Server*****/

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(process.env.NODE_ENV);
    console.log(`Servers is running on port ${PORT}`);
});
