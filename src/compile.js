
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

var getCss = function () {
  var css = '';
  Object.keys(styles)
  .forEach(key => {
    css += `
      ${key} {
        ${styles[key]}
      }
    `;
  });
  return css;
}

//  print just CSS
if(process.env.TYPE === 'css'){
  console.log(getCss());
  return true;
}

var getStyleFor = function (selector) {

  if(process.env.TYPE === 'traditional' || process.env.TYPE === 'embedded'){
    return `class="${selector.replace(/\./g, ' ')}"`;
  }
  else if(process.env.TYPE === 'inline'){
    return `style="${styles[selector].replace(/\n/gm, '').replace(/\s+/g, ' ')}"`;
  }
  else {
    throw new Error('valid TYPE variables are "inline", "traditional" and "embedded"');
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

var headerTag = '';
if(process.env.TYPE === 'traditional'){
  headerTag = '<link rel="stylesheet" href="style.css" media="all">';
} else if(process.env.TYPE === 'embedded'){
  headerTag = `<style>${getCss()}</style>`;
}


var html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${process.env.TYPE} CSS</title>
    ${headerTag}
  </head>
  <body>
    ${body}
  </body>
</html>
`;


console.log(html);
