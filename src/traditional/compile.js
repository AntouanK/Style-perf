
'use strict';

var header = `
<div class="header">
  header
</div>
`;

var block = `
<div title="Demo Url Based Avatar" class="card-wrapper">
  <img src="http://lorempixel.com/100/100/nature/" class="card-image" >
  <div class="card-header">
    <span class="header-text black">
      Demo Url Based Avatar
    </span>
    <span style="header-text grey">
      Subtitle
    </span>
  </div>
</div>
`;

var blocks = '';
var multiplier = 100;
var i = 0;
while(i < multiplier){
  blocks += block;
  i += 1;
}


var body = `
${header}
${blocks}
`;

var html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Traditional CSS</title>
    <link rel="stylesheet" href="style.css" media="all">
  </head>
  <body>

    ${body}

  </body>
</html>
`;


console.log(html);
