const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const PDFDocument = require('pdfkit');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('combine'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.post('/api/generate_pdf', (req, res) => {
	var pics = req.body.pics;
  var doc = new PDFDocument({
  	layout: 'landscape',
  	size: 'A4',
    info: {
      Title: 'ArtGurianov.com',
      Author: 'Art Gurianov'
    }
  });
  var compath = path.join(__dirname, '/../public/CustomComposite.pdf');
  doc.pipe(fs.createWriteStream(compath));
  /*doc.fontSize(15).text('Wally Gator !', 50, 50);
  doc.text('Wally Gator is a swinging alligator in the swamp. He\'s the greatest percolator when he really starts to romp. There has never been a greater operator in the swamp. See ya later, Wally Gator.', {
    width: 410,
    align: 'left'
  });*/
  doc.image(__dirname + '/../public/images/' + pics[0], 10, 10, {
    height: 550
  }).rect(10, 10, 365, 550).stroke();
  doc.image(__dirname + '/../public/images/' + pics[1], 385, 10, {
    height: 275
  }).rect(385, 10, 184, 275).stroke();
  doc.image(__dirname + '/../public/images/' + pics[2], 575, 10, {
    height: 275
  }).rect(575, 10, 184, 275).stroke();
  doc.image(__dirname + '/../public/images/' + pics[3], 385, 285, {
    height: 275
  }).rect(385, 285, 184, 275).stroke();
  doc.image(__dirname + '/../public/images/' + pics[4], 575, 285, {
    height: 275
  }).rect(575, 285, 184, 275).stroke();
  doc.end();
  res.send({status: 'OK'});
});


app.listen(process.env.PORT || 3000, function() {
	console.log('server started on port 3000...');
});
