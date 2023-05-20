#!/usr/bin/env node
const fs = require('fs');

fs.readdir(process.cwd(), (err, files)=>{
  console.log(files);
  for (var filename of files) {
    fs.lstat(filename, (err, stats)=>{
      console.log(filename, stats.isFile());
    })
  }
});
