require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const userName = process.env.DB_USER;
const password = process.env.DB_PASS;
const hostURL = process.env.DB_HOST;
const port = process.env.PORT || 3000;
const connectionString = `mongodb+srv://${userName}:${password}@${hostURL}`;
const app = express();
const productRoute = require('./routes/product.route');

// Middleware
app.use(express.json());//Enable JSON serialization
app.use(express.urlencoded({ extended:false }));//Enable URL encoding

//Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('BASIC CRUD APPLICATION')
})

/**
 * Connect to Database
 */
mongoose.connect(connectionString)
    .then(() => {
        console.log('Connected to MongoDB')
        setServer()
    })
    .catch((error) => console.error('Could not connect to MongoDB:', error));

    /**
     * Initialize Server
     */
setServer = () => {
    app.listen(port, () => {
        console.log('Server is running on port 3000')
    })


}