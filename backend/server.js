const express       = require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const app           = express();
const morgan        = require('morgan');

// log requests to the console
app.use(morgan('dev')); 

// App props
const hostname = '/api/';
const port_number = 9000;

// Get all routes
const routes = require('./routes/routes');

// Enable CORS
app.use(cors());

// Parse incoming req bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set all routes
app.use(hostname, routes);

// 404, endpoint not found
app.use((req, res, next) => {
    const err = new Error('Sorry! Route not found.');
    err.status = 404;
    next(err);
})

// Final fallback, error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
        .send({ message: 'An error occurred' });
});

// Start server
app.listen(port_number, () => {
    console.log('Listening on port ' + port_number + '....');
})
