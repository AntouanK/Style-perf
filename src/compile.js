
'use strict';

var styles = {
  '.card-wrapper': `
    height: 72px;
    padding: 16px;
    font-weight: 500;
    box-sizing: border-box;
    position: relative;`,

  '.header': `
    padding-top: 10px;
    padding-bottom: 10px;
    min-width: 1000px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
  `,

  '.card-image': `
    did-flip:true;
    height:38px;
    width:38px;
    -webkit-user-select:none;
    border-radius:50%;
    display:inline-block;
    border:solid 1px rgba(0, 0, 0, 0.08);
    margin-right:16px;
  `,

  '.card-header': `
    did-flip:true;
    display:inline-block;
    vertical-align:top;
  `,

  '.header-text.black': `
    did-flip:true;
    color:rgba(0, 0, 0, 0.87);
    display:block;
    font-size:15px;
  `,

  '.header-text.grey': `
    did-flip:true;
    color:rgba(0, 0, 0, 0.54);
    display:block;
    font-size:14px;
  `
};

//  print just CSS
if(process.env.TYPE === 'css'){
  Object.keys(styles)
  .forEach(key => {
    console.log(`
      ${key} {
        ${styles[key]}
      }
    `);
  });
  return true;
}

var getStyleFor = function (selector) {

  if(process.env.TYPE === 'traditional'){
    return `class="${selector.replace(/\./g, ' ')}"`;
  }
  else if(process.env.TYPE === 'inline'){
    return `style="${styles[selector].replace(/\n/gm, '').replace(/\s+/g, ' ')}"`;
  }
  else {
    throw new Error('valid TYPE variables are "inline" and "traditional"');
  }

};



var header = `
<div ${getStyleFor(".header")}>
  header
</div>
`;

var getBlock = function () {

  var block = `
  <div title="Demo Url Based Avatar" ${getStyleFor(".card-wrapper")}>
    <img src="http://lorempixel.com/100/100/nature/" ${getStyleFor(".card-image")}>
    <div ${getStyleFor(".card-header")}>
      <span ${getStyleFor(".header-text.black")}>
        Demo Url Based Avatar
      </span>
      <span ${getStyleFor(".header-text.grey")}>
        Subtitle
      </span>
    </div>
  </div>
  `;

  return block;
};


var blocks = '';
var block = getBlock();
var multiplier = 1000;
var i = 0;
while(i < multiplier){
  blocks += block;
  i += 1;
}


var body = `
${header}
${blocks}
`;

var cssLink = '';
if(process.env.TYPE === 'traditional'){
  cssLink = '<link rel="stylesheet" href="style.css" media="all">';
}

var html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Traditional CSS</title>
    ${cssLink}
  </head>
  <body>
    ${body}
  </body>
</html>
`;


console.log(html);
