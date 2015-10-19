#!/bin/sh

cp traditional/*.css ../traditional/
node traditional/compile.js > ../traditional/index.html
