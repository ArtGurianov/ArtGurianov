const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const twoFactor = require('node-2fa');
const {SHA256} = require('crypto-js');

var authSecret = 'HK5LSXAMSDXU7BQ3GEEMACVKVCTLVRVV'//twoFactor.generateSecret({name: 'artgurianov', account: 'artgurianovcom'});
var authToken = undefined; // valid for 1 minute to login
var	sessionToken = undefined; //valid for 10 minutes to update content


const app = express();
app.use(morgan('combine'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.get('/api/generate_authToken', (req, res) => {
	authToken = twoFactor.generateToken(authSecret); //authSecret.secret
	console.log(authToken);
	setTimeout(function(){ authToken = undefined }, 60000);
	res.send({status: "TOKEN CREATED"});
});

app.post('/api/validate_authToken', (req, res) => {

	var result = twoFactor.verifyToken(authSecret, req.body.authcode); //authSecret.secret

	if (result === null) {
    res.statusCode = 302;
    res.setHeader("Location", "http://localhost:8080/auth.html");
    res.end();
	} else if (result.delta < 0) {
    res.statusCode = 302;
    res.setHeader("Location", "http://localhost:8080/auth.html");
    res.end();
	} else if (result.delta >= 0) {
		sessionToken = SHA256(authToken).toString();
    setTimeout(function(){ sessionToken = undefined }, 600000);
    res.statusCode = 302;
    res.setHeader("Location", "http://localhost:8080/admin.html?sessionToken=" + sessionToken);
    res.end();
	}
});

app.post('/api/validate_sessionToken', (req, res) => {
	if (req.body.sessionToken === sessionToken) {
		res.send({status: "OK"});
	} else {
		res.send({status: "FAILED"});
	}
});

app.listen(process.env.PORT || 3000, function() {
	console.log('server started on port 3000...');
});
