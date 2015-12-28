'use strict';

/**
 * @ngdoc function
 * @name tumblrmemeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tumblrmemeApp
 */
angular.module('tumblrmemeApp')
    .controller('MainCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.uploadFile = function() {
            var imageLoader = document.getElementById('imageLoader');
            imageLoader.addEventListener('change', handleImage, false);
            var canvas = document.getElementById('imageCanvas');
            var ctx = canvas.getContext('2d');


            function handleImage(e) {
                var reader = new FileReader();
                reader.onload = function(event) {
                    var img = new Image();
                    img.onload = function() {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);
                    };
                    img.src = event.target.result;
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        };

        $scope.changeText = function() {
          var canvas = document.getElementById('imageCanvas');
          var toptext = document.getElementById('toptext').value;
          var canvastext = document.getElementById('canvastext');
          canvastext.width = canvas.width;
          var textcontext = canvastext.getContext("2d");

          function wrapText(textcontext, toptext, x, y, maxWidth, lineHeight) {
              var words = toptext.split(' ');
              var line = '';

              for (var n = 0; n < words.length; n++) {
                  var testLine = line + words[n] + ' ';
                  var metrics = textcontext.measureText(testLine);
                  var testWidth = metrics.width;
                  if (testWidth > maxWidth && n > 0) {
                      textcontext.fillText(line, x, y);
                      line = words[n] + ' ';
                      y += lineHeight;
                  } else {
                      line = testLine;
                  }
              }
              textcontext.fillText(line, x, y);
          }

          textcontext.beginPath(); // clear existing drawing paths
          textcontext.save(); // store the current transformation matrix

          // Use the identity matrix while clearing the canvas
          textcontext.setTransform(1, 0, 0, 1, 0, 0);
          textcontext.clearRect(0, 0, canvastext.width, canvastext.height);

          textcontext.restore(); // restore the transform

          textcontext.font = "20px Roboto";
          // textcontext.textAlign = "center";
          // textcontext.fillText(toptext, canvas.width / 2, 20);
          var maxWidth = canvastext.width;
          var lineHeight = 25;
          var x = (canvas.width - maxWidth) / 2;
          var y = 35;
          wrapText(textcontext, toptext, x, y, maxWidth, lineHeight);

        };

        $scope.create = function() {
            var canvasimg = document.getElementById('imageCanvas');
            var canvastext = document.getElementById('canvastext');
            var ctr = canvasimg.getContext('2d');
            ctr.drawImage(canvastext, 0, 0);
            var uri = canvasimg.toDataURL("image/png");
            downloadImage(uri, generateName());
            // download.href = data;
        };

        function generateName() {
            var n = [];
            for (var i = 0; i < 10; i++) {
                n.push((Math.floor(Math.random() * 16)).toString(16));
            }
            return n.join('');
        }

        function downloadImage(uri, name) {
            var link = document.createElement('a');
            link.download = name;
            link.href = uri;
            link.click();
        }

        //         $scope.create = function() {
        //   var uri = document.getElementById('myCanvas').toDataURL();
        //   downloadImage(uri,generateName());
        // }
        //
        // function generateName() {
        //   var n = [];
        //   for(var i =0; i < 10;i++) {
        //     n.push((Math.floor(Math.random() *16)).toString(16));
        //   }
        //   return n.join('');
        // };
        //
        // function downloadImage(uri,name) {
        //   var link = document.createElement('a');
        //   link.download = name;
        //   link.href = uri;
        //   link.click();
        // };

    });
