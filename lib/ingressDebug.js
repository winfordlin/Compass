const colors = require('colors');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

exports.debugIngressQ = async (ingressName) => {
  console.log(colors.green(ingressName));
};

exports.debugIngressQ1 = async (ingressName) => {};

exports.debugIngressQ2 = async (ingressName) => {};

exports.debugIngressQ3 = async (ingressName) => {};
