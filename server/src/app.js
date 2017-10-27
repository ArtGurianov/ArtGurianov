const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const twoFactor = require('node-2fa');
const {SHA256} = require('crypto-js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://artgurianov:artgur96@ds161194.mlab.com:61194/artgurianov_storage');
const db = mongoose.connection;

var authSecret = 'HK5LSXAMSDXU7BQ3GEEMACVKVCTLVRVV'//twoFactor.generateSecret({name: 'artgurianov', account: 'artgurianovcom'});
var authToken = undefined; // valid for 1 minute to login
var	sessionToken = undefined; //valid for 10 minutes to update content

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('combine'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

const MediaModel = require('../models/MediaModel');


app.get('/api/generate_authToken', (req, res) => {
	authToken = twoFactor.generateToken(authSecret); //authSecret.secret
	console.log(authToken);
	setTimeout(function(){ authToken = undefined }, 60000);
	res.send({status: "TOKEN CREATED"});
});

app.post('/api/validate_authToken', (req, res) => {

	var result = twoFactor.verifyToken(authSecret, req.body.authcode); //authSecret.secret

	if (result === null) {
    res.send({status: "Code is wrong!"});
	} else if (result.delta < 0) {
    res.send({status: "Code is outdated!"});
	} else if (result.delta >= 0) {
		sessionToken = SHA256(authToken).toString();
    setTimeout(function(){ sessionToken = undefined }, 600000);
    res.send({status: "OK", sessionToken: sessionToken});
	}
});

app.post('/api/validate_sessionToken', (req, res) => {
	if (req.body.sessionToken === sessionToken) {
		res.send({status: "OK"});
	} else {
		res.send({status: "FAILED"});
	}
});




app.get('/api/get_media_data', function (req, res) {

  MediaModel.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });

});



app.listen(process.env.PORT || 3000, function() {
	console.log('server started on port 3000...');
});
