const colors = require('colors');
const serviceQ = require('./serviceQ');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

exports.debugServiceQ = async (service) => {
  (await serviceQ.isEndPoints())
    ? this.debugServiceQ1(service)
    : this.debugServiceQ2(service);
};

exports.debugServiceQ1 = async (service) => {};

exports.debugServiceQ2 = async () => {
  if (await serviceQ.isSelectorMatching()) {
  } else {
    console.log(
      colors.green('Fix the Service selector. It has to match the Pod labels')
    );
  }
};
