const colors = require('colors');
const serviceQ = require('./serviceQ');
const ingressDebug = require('./ingressDebug');
const util = require('util');

//--------------------------- Ask Service-Specific Questions ------------------------------//

exports.debugServiceQ = async (service) => {
  (await serviceQ.isEndPoints())
    ? this.debugServiceQ1(service)
    : this.debugServiceQ2(service);
};

exports.debugServiceQ1 = async () => {
  if (await serviceQ.canAccess()) {
    console.log(colors.green(`The Service is running correctly`));
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
      colors.green('Fix the Service selector. It has to match the Pod labels')
    );
  }
};

exports.debugServiceQ3 = async () => {
  if (await serviceQ.isIPAssigned()) {
    console.log(colors.green(`There is an issue with the Kubelet`));
  } else {
    console.log(colors.green(`There is an issue with the Controller manager`));
  }
};

exports.debugServiceQ4 = async () => {
  if (await serviceQ.isTargetPortMatching()) {
    console.log(colors.green(`The issue could be with the Kube Proxy`));
  } else {
    console.log(colors.green(`Fix the targetPort and the containerPort`));
  }
};
