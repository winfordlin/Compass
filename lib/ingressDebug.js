const colors = require('colors');
const util = require('util');
const ingressQ = require('./ingressQ');
const exec = util.promisify(require('child_process').exec);

//--------------------------- Ask Ingress-Specific Questions ------------------------------//

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

  if (await ingressQ.canSeeBackends()) {
    this.debugIngressQ1();
  } else {
    this.debugIngressQ2();
  }
};

exports.debugIngressQ1 = async () => {
  if (await ingressQ.canAccess()) {
    this.debugIngressQ3();
  } else {
    console.log(
      colors.green(
        `\n The issue is specific to the ingress controller. Consult the docs for your ingress \n`
      )
    );
  }
};

exports.debugIngressQ2 = async () => {
  if (await ingressQ.matchesServices()) {
    console.log(
      colors.green(
        `\n The issue is specific to the ingress controller. Consult the docs for your ingress \n`
      )
    );
  } else {
    console.log(
      colors.green(`\n Fix the ingress serviceName and servicePort \n`)
    );
  }
};

exports.debugIngressQ3 = async (ingressName) => {
  console.log(colors.green(`\n THE INGRESS IS RUNNING CORRECTLY \n`));
  if (ingressQ.isInternetVisible()) {
    console.log(colors.green(`\n END \n`));
  } else {
    console.log(
      colors.green(
        `\n The issue is likely to be with the infrastructure and how the cluster is exposed. \n`
      )
    );
  }
};
