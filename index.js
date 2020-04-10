const {ClassInOtherFile} = require('./test');

class ClassInSameFile {
  constructor() {
    this.y = 5;
  }
  
  methodY() {}
}

/**
 * @param {ClassInOtherFile} test1
 * @param {ClassInSameFile} test2
 */
function main(test1, test2) {
  console.log(test1.x);
  console.log(test1.methodX());
  console.log(test2.y);
  console.log(test2.methodY());
}