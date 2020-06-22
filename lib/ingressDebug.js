const colors = require('colors');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

exports.debugIngressQ = async (ingressName) => {
  const { stdout, stderr } = await exec(
    `kubectl describe ingress ${ingressName}`
  );
  stderr ? console.log('Error: ' + stderr) : console.log(stdout);

  console.log(
    colors.yellow(
      `\n Command Executed: kubectl describe ingress ${ingressName} \n`
    )
  );
};

exports.debugIngressQ1 = async (ingressName) => {};

exports.debugIngressQ2 = async (ingressName) => {};

exports.debugIngressQ3 = async (ingressName) => {};
