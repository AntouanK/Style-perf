#!/bin/sh

echo 'clean'
rm ../traditional/* ../inline/*

echo 'compiling traditional';
export TYPE='css';
node compile.js > ../traditional/style.css
export TYPE='traditional';
node compile.js > ../traditional/index.html

echo 'compiling inline';
export TYPE='inline';
node compile.js > ../inline/index.html

echo 'done  =)';
