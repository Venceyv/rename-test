const fs = require('fs');
const path = require('path');

// folder name
const folder = './imageye/';

// with dash rename
fs.readdir(folder, 'utf8', (err, files) => {
  files.forEach((file) => {
    if (!file.includes('-')) return;
    fs.rename(folder + file, folder + file.slice(file.indexOf('-') + 1), (err) => {
      if (err) console.log(err);
    });
  });
});

// without dash rename
fs.readdir(folder, 'utf8', (err, files) => {
  files.forEach((file) => {
    fs.rename(folder + file, folder + file.slice(2), (err) => {
      if (err) console.log(err);
    });
  });
});
