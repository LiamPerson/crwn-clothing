const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const res = require('express/lib/response');
const compression = require('compression');

// Load config.
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// Json decoode all requests, set urlencoded to true.
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if(process.env.NODE_ENV === 'production') {
    // Server static files if in production
    app.use(express.static(path.join(__dirname, 'client/build')));

    // On request, server index.html from client/build folder while in production.
    app.get('*', function(request, response) {
        response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

// Listen for errors
app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port " + port);
})

// When a request gets sent to /payment endpoint...
app.post('/payment', (request, response) => {
    const body = {
        source: request.body.token.id,
        amount: request.body.amount,
        currency: 'aud',
    };

    // Respond with error or stripe response.
    stripe.charges.create(body, (stripeError, stripeResponse) => {
        if(stripeError)
            response.status(500).send({ error: stripeError });
        else
            response.status(200).send({ success: stripeResponse });
    })
})