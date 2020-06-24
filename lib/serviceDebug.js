const colors = require('colors');
const serviceQ = require('./serviceQ');
const ingressDebug = require('./ingressDebug');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

//--------------------------- Ask Service-Specific Questions ------------------------------//

exports.debugServiceQ = async (service) => {
  const { stdout, stderr } = await exec(`kubectl describe service ${service}`);
  stderr ? console.log('Error: ' + stderr) : console.log(` \n ${stdout}`);

  console.log(
    colors.yellow(`\n Command Executed: kubectl describe service ${service} \n`)
  );

  (await serviceQ.isEndPoints())
    ? this.debugServiceQ1(service)
    : this.debugServiceQ2(service);
};

exports.debugServiceQ1 = async () => {
  if (await serviceQ.canAccess()) {
    console.log(colors.green(`\n The SERVICE IS RUNNING CORRECTLY \n`));
    let ingressName = await serviceQ.ingressName();
    ingressDebug.debugIngressQ(ingressName);
  } else {
    this.debugServiceQ4();
  }
};

exports.debugServiceQ2 = async () => {
  if (await serviceQ.isSelectorMatching()) {
    this.debugServiceQ3();
  } else {
    console.log(
      colors.green(
        '\n Fix the Service selector. It has to match the Pod labels \n'
      )
    );
  }
};

exports.debugServiceQ3 = async () => {
  if (await serviceQ.isIPAssigned()) {
    console.log(colors.green(`\n There is an issue with the Kubelet \n`));
  } else {
    console.log(
      colors.green(`\n There is an issue with the Controller manager \n`)
    );
  }
};

exports.debugServiceQ4 = async () => {
  if (await serviceQ.isTargetPortMatching()) {
    console.log(colors.green(`\n The issue could be with the Kube Proxy \n`));
  } else {
    console.log(colors.green(`\n Fix the targetPort and the containerPort \n`));
  }
};
