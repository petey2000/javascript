const fs = require('fs');

// promises Unterobject
const getFileContent = (path, encoding = 'utf-8') => {
  return fs.promises.readFile(path, encoding);
};

const getFileContent2 = (path, encoding = 'utf-8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      // console.log(data);
      if (err) reject(err);
      resolve(data);
    });
  });
};

getFileContent('files/hello.txt')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Promise.all([
//   getFileContent('files/hello1.txt'),
//   getFileContent('files/hello2.txt'),
//   getFileContent('files/hello3.txt'),
//   getFileContent('files/hello4.txt'),
// ])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => console.error(err));
