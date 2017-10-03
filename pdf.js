PDFDocument = require('pdfkit');
blobStream = require('blob-stream');

var doc = new PDFDocument;
var stream = doc.pipe(blobStream());
doc.end();
stream.on('finish', function () {
    var blob = stream.toBlob('application/pdf');
    var url = stream.toBlobURL('application/pdf')
})
