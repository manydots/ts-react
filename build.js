'use strict';

let fs = require('fs-extra');
let globby = require('globby');
let path = require('path');

//STEP 3 将lib copy 到 build 目录
globby([
  'node_modules/react/umd/react.profiling.min.js',
  'node_modules/react-dom/umd/react-dom.profiling.min.js',
]).then(paths => {
  fs.mkdirsSync('build/lib/');
  paths.forEach((item) => {
    let filename = path.basename(item);
    fs.copySync(item, 'build/lib/' + filename);
  });
});

//使用统计

console.log('copy files to build/lib done !');
