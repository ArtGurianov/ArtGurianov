const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const twoFactor = require('node-2fa');

var newSecret = 'HK5LSXAMSDXU7BQ3GEEMACVKVCTLVRVV'//twoFactor.generateSecret({name: 'artgurianov', account: 'artgurianovcom'});
var newToken = undefined;


const app = express();
app.use(morgan('combine'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.get('/api/generate_token', (req, res) => {
	newToken = twoFactor.generateToken(newSecret); //newSecret.secret
	console.log(newToken);
	setTimeout(function(){ newToken = undefined }, 60000);
	res.send({status: "TOKEN CREATED"});
});

app.post('/api/validate_token', (req, res) => {

	var result = twoFactor.verifyToken(newSecret, req.body.authcode); //newSecret.secret

	if (result === null) {
		res.send('There was an error. Please try again later...');
	}
	if (result.delta < 0) {
		res.send('This key has already expired. Please try again...');
	}
	if (result.delta >= 0) {
		res.send('SUCCESS');
	}
});

app.listen(process.env.PORT || 3000, function() {
	console.log('server started on port 3000...');
});
