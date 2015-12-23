// function clearCanvas(cnv) {
//   var ctx = cnv.getContext('2d');     // gets reference to canvas context
//   ctx.beginPath();    // clear existing drawing paths
//   ctx.save();         // store the current transformation matrix
//
//   // Use the identity matrix while clearing the canvas
//   ctx.setTransform(1, 0, 0, 1, 0, 0);
//   ctx.clearRect(0, 0, cnv.width, cnv.height);
//
//   ctx.restore();        // restore the transform
// }
//
// // adds the text in canvas, oon multiple lines
// // ctx = reference to canvas context
// // text = the text to add
// // x = horizontal position where to start adding the text
// // y = vertical position where to start adding the text
// // maxWidth = the maximum width of the text line
// //  lineHeight = the height of the line
// function  addTextCnv(ctx, text, x, y, maxWidth, lineHeight) {
//   // splits the text in words to can wrap it on new lie if exceds maxWidth
//   var words = text.split(' ');
//   var nr_w = words.length
//   var addtxt = '';
//
//   // sets to add the text and rows
//   for(var n = 0; n < nr_w; n  ) {
//     var txtLine = addtxt   words[n]   ' ';
//     var metrics = ctx.measureText(txtLine);
//     var txtWidth = metrics.width;
//     if (txtWidth > maxWidth && n > 0) {
//       ctx.fillText(addtxt, x, y);
//       addtxt = words[n]   ' ';
//       y  = lineHeight;
//     }
//     else addtxt = txtLine;
//   }
//
//   // adds the text in canvas (sets text color, font type and size)
//   ctx.fillStyle = '#0001be';
//   ctx.font = 'bold 17px sans-serif';
//   ctx.fillText(addtxt, x, y);
// }
//
// // get a reference to the canvas element, and its context
// var cnv1 = document.getElementById('cnv1');
// var ctx1 = cnv1.getContext('2d');
//
// // sets maximum line width, line height, and x /y coords for text
// var maxWidth = cnv1.width - 10;
// var lineHeight = 23;
// var x_pos = (cnv1.width - maxWidth) / 2;
// var y_pos = 15;
//
// // register onkeyup event for #text_cnv text field to add the text in canvas as it is typed
// document.getElementById('text_cnv').onkeyup = function() {
//   clearCanvas(cnv1);      // clears the canvas
//   addTextCnv(ctx1, this.value, x_pos, y_pos, maxWidth, lineHeight);
// }
// // ]]>
