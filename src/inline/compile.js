
var readline  = require('readline');
var fs        = require('fs');
var path      = require('path');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var buffer = '';
var stylesheet;

rl.on('line', function (cmd) {

  //  ignore the stylesheet link
  if(cmd.match(/rel\=\"stylesheet\"/i) !== null){
    stylesheet = cmd;
    return true;
  }

  buffer += cmd + '\n';

  if(cmd.match(/\<\/html\>/i) !== null){
    parseMarkup(buffer);
  }
});



var loadStyle = function (stylesheet) {

  var matchPath = stylesheet.match(/href="(.+?)"/);
  if(matchPath.length < 2){
    throw new Error('href not found');
  }

  var cssContent = fs
  .readFileSync(
    path.resolve(`../traditional/${matchPath[1]}`)
  )
  .toString();

  var sections = cssContent.match(/(\s*[\w\.\-]+\s*?)\{([\s\S]+?)\}/gm);
  sections
  .forEach(section => {
    console.log('---section');
    var matches = section.match(/(\S+)\s*\{([\s\S]+)\}/);
    var selector = matches[1];
    var styles = matches[2].replace(/\n/gm,'');
    console.log('selector', selector);
    console.log('styles', styles);
  })
};

var parseMarkup = function (markup) {

  loadStyle(stylesheet);

  // console.log(markup);
};
