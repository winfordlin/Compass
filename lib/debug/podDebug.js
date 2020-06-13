const podQ = require('./podQ');
const colors = require('colors');
const serviceDebug = require('./serviceDebug');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

//--------------------------- Ask Pod-Specific Questions ------------------------------//

//working

exports.debugPodQ = async function lsExample(podName) {
  const { stdout, stderr } = await exec('kubectl get pods');
  stderr ? console.log('Error: ' + stderr) : console.log(stdout);

  (await podQ.isPendingPod())
    ? this.debugPodQ1(podName)
    : this.debugPodQ2(podName);
};

exports.debugPodQ1 = async (podName) => {
  const { stdout, stderr } = await exec(`kubectl describe pod ${podName}`);
  stderr ? console.log('Error: ' + stderr) : console.log(stdout);

  if (await podQ.isClusterFull()) {
    console.log(`\n Provision a ${colors.green('BIGGER')} Cluster \n`);
  } else {
    this.debugPodQ8(podName);
  }
};

exports.debugPodQ2 = async (podName) => {
  (await podQ.isRunningPod())
    ? this.debugPodQ3(podName)
    : this.debugPodQ4(podName);
};

exports.debugPodQ3 = async (podName) => {
  (await podQ.isPodReady())
    ? this.debugPodQ5(podName)
    : this.debugPodQ6(podName);
};

exports.debugPodQ4 = async (podName) => {
  const { stdout, stderr } = await exec(`kubectl logs ${podName}`);
  stderr ? console.log('Error: ' + stderr) : console.log(stdout);
  if (await podQ.isLogVisible()) {
    console.log(`\n Fix the issue in the ${colors.green('APPLICATION')} \n`);
  } else {
    this.debugPodQ11(podName);
  }
};

exports.debugPodQ5 = async (podName) => {
  let podPort = await podQ.podPort();
  console.log(`kubectl port-forward ${podName} 8080:${podPort}`);
  if (await podQ.canAccess()) {
    console.log(colors.green('\n PODS ARE RUNNING CORRECTLY \n'));

    let serviceName = await podQ.serviceName();
    serviceDebug.debugServiceQ(serviceName);
  } else {
    this.debugPodQ7(podName);
  }
};

exports.debugPodQ6 = async (podName) => {
  const { stdout, stderr } = await exec(`kubectl describe pod ${podName}`);
  stderr ? console.log('Error: ' + stderr) : console.log(stdout);

  if (await podQ.isReadinessProbe()) {
    console.log(colors.green('\n FIX THE READINESS PROBE \n'));
  } else {
    console.log(`\n ${colors.red('UNKNOWN STATE')} \n`);
  }
};

exports.debugPodQ7 = async () => {
  if (await podQ.isExposedAndListening()) {
    console.log(colors.red('\n UNKNOWN STATE \n'));
  } else {
    console.log(
      `\n Fix the app. It should listen on 0.0.0.0. Update the ${colors.green(
        'containerPort'
      )}. \n`
    );
  }
};

exports.debugPodQ8 = async (podName) => {
  if (await podQ.isResourceQuotaLimit()) {
    console.log(`\n ${colors.green('RELAX')} the ResourceQuota limits \n`);
  } else {
    this.debugPodQ9(podName);
  }
};

exports.debugPodQ9 = async (podName) => {
  if (await podQ.isPendingPersistentVolumesClaim()) {
    console.log(`\n Fix the ${colors.red('PersistentVolumesClaim')} \n`);
  } else {
    this.debugPod10(podName);
  }
};

exports.debugPod10 = async () => {
  const { stdout, stderr } = await exec(`kubectl get pods -o wide`);
  stderr ? console.log('Error: ' + stderr) : console.log(stdout);

  if (await podQ.isAssignedNode()) {
    console.log(`\n There is an issue with the ${colors.green('Kubelet')} \n`);
  } else {
    console.log(
      `\n There is an issue with the ${colors.green('Scheduler')} \n`
    );
  }
};

exports.debugPodQ11 = async (podName) => {
  if (await podQ.isContainerDead()) {
    const { stdout, stderr } = await exec(`kubectl logs ${podName} --previous`);
    stderr ? console.log('Error: ' + stderr) : console.log(stdout);
  } else {
    this.debugPodQ12(podName);
  }
};

exports.debugPodQ12 = async (podName) => {
  const { stdout, stderr } = await exec(`kubectl describe pod ${podName}`);
  stderr ? console.log('Error: ' + stderr) : console.log(stdout);
  if (await podQ.isImagePullBackOff()) {
    this.debugPodQ13();
  } else {
    this.debugPodQ16();
  }
};

exports.debugPodQ13 = async () => {
  if (await podQ.isImageName()) {
  } else {
    console.log(`\n Fix the ${colors.red('IMAGE NAME')} \n`);
  }
};

exports.debugPodQ14 = async () => {
  if (await podQ.isImageTagValid()) {
  } else {
    console.log(`\n Fix the ${colors.red('TAG')} \n`);
  }
};

exports.debugPodQ15 = async () => {
  if (await podQ.isImagePrivateRegistry()) {
    console.log(
      `\n ${colors.red('CONFIGURE')} pulling images from a private registry \n`
    );
  } else {
    console.log(
      `\n The issue could be with the ${colors.green('CRI')} or ${colors.green(
        'Kubelet'
      )} \n`
    );
  }
};

exports.debugPodQ16 = async () => {
  (await podQ.isCrashLoopBackOff()) ? this.debugPodQ17() : this.debugPodQ18();
};

exports.debugPodQ17 = async () => {
  if (await podQ.isInspectAndFixApp()) {
    this.debugPodQ19();
  } else {
    console.log(`\n ${colors.green('Fix crashing app')} \n`);
  }
};

exports.debugPodQ18 = async () => {
  if (await podQ.isRunContainerError()) {
    console.log(
      `\n The issue is likely to be with ${colors.green('Mounting Volumes')} \n`
    );
  } else {
    console.log(`\n Whoops! Consult ${colors.green('StackOverFlow')} \n`);
  }
};

exports.debugPodQ19 = async () => {
  if (await podQ.isCMDDockerfile()) {
    console.log(`\n Fix the ${colors.green('Dockerfile')} \n`);
  } else {
    this.debugPodQ20();
  }
};

exports.debugPodQ20 = async () => {
  if (await podQ.isRestartingFrequently()) {
    console.log(`\n Fix the ${colors.green('Liveness Probe')} \n`);
  } else {
    console.log(`\n ${colors.red('Unknown State')} \n`);
  }
};
