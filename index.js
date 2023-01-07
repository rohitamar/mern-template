const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

/*
try {
    mongoose.connect( 
        process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true
        }
    );
} catch(e) {
    console.log(e);
}
*/
app.use(cors());

//routes

//production build
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
});

//listening on PORT
app.listen(PORT, () => {
    console.log(`Server is starting at PORT: ${PORT}`);
});