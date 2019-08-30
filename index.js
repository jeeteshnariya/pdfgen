
var fs = require('fs');
var pdfMake = require('./src/pdfmake.min.js');
var pdfFonts = require('./src/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var fileName = './pdf/output.pdf'

// format json object here

var docDefinition = {
    content: [
        'my first paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
    ]
};


// write to PDF
var pdfDoc = pdfMake.createPdf(docDefinition)
var doc = pdfDoc.getStream();
doc.pipe(fs.createWriteStream(fileName));
doc.end();