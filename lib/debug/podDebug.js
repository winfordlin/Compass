const podQ = require('./podQ');
const colors = require('colors');

//--------------------------- Ask Questions ------------------------------//

exports.debugPodQ = async () => {
  console.log('kubectl get pods');

  (await podQ.isPendingPod()) ? this.debugPodQ1() : this.debugPodQ2();
};

exports.debugPodQ1 = async () => {
  console.log('kubectl describe pod <pod-name>');

  if (await podQ.isClusterFull()) {
    console.log(`Provision a ${colors.red('BIGGER')} Cluster`);
  } else {
    this.debugPodQ8();
  }
};

exports.debugPodQ2 = async () => {
  (await podQ.isRunningPod()) ? this.debugPodQ3() : this.debugPodQ4();
};

exports.debugPodQ3 = async () => {
  (await podQ.isPodReady()) ? this.debugPodQ5() : this.debugPodQ6();
};

exports.debugPodQ4 = async () => {
  console.log('kubectl logs <pod-name>');
  if (await podQ.isLogVisible()) {
    console.log(`Fix the issue in the ${colors.red('APPLICATION')}`);
  } else {
    this.debugPodQ11();
  }
};

exports.debugPodQ5 = async () => {
  console.log('kubectl port-forward <pod-name> 8080:<pod-port>');
  if (await podQ.canAccess()) {
    console.log(colors.green('PODS ARE RUNNING CORRECTLY'));
    //redirect to serviceDebug
    //inquire service name
  } else {
    this.debugPodQ7();
  }
};

exports.debugPodQ6 = async () => {
  console.log('kubectl describe pod <pod-name>');

  if (await podQ.isReadinessProbe()) {
    console.log(colors.red('FIX THE READINESS PROBE'));
  } else {
    console.log(colors.red('UNKNOWN STATE'));
  }
};

exports.debugPodQ7 = async () => {
  if (await podQ.isExposedAndListening()) {
    console.log(colors.red('UNKNOWN STATE'));
  } else {
    console.log(
      `Fix the app. It should listen on 0.0.0.0. Update the ${colors.red(
        'containerPort'
      )}.`
    );
  }
};

exports.debugPodQ8 = async () => {
  if (await podQ.isResourceQuotaLimit()) {
    console.log(`${colors.red('RELAX')} the ResourceQuota limits`);
  } else {
    this.debugPodQ9();
  }
};

exports.debugPodQ9 = async () => {
  if (await podQ.isPendingPersistentVolumesClaim()) {
    console.log(`Fix the ${colors.red('PersistentVolumesClaim')}`);
  } else {
    this.debugPod10();
  }
};

exports.debugPod10 = async () => {
  console.log('kubectl get pods -o wide');

  if (await podQ.isAssignedNode()) {
    console.log(`There is an issue with the ${'Kubelet'}`);
  } else {
    console.log(`There is an issue with the ${'Scheduler'}`);
  }
};

exports.debugPodQ11 = async () => {
  if (await podQ.isContainerDead()) {
    console.log('kubectl logs <pod-name> --previous');
  } else {
    this.debugPodQ12();
  }
};

exports.debugPodQ12 = async () => {
  console.log('kubectl describe pod <pod-name>');
  if (await podQ.isImagePullBackOff()) {
    this.debugPodQ13();
  } else {
    this.debugPodQ16();
  }
};

exports.debugPodQ13 = async () => {
  if (await podQ.isImageName()) {
  } else {
    console.log(`Fix the ${colors.red('IMAGE NAME')}`);
  }
};

exports.debugPodQ14 = async () => {
  if (await podQ.isImageTagValid()) {
  } else {
    console.log(`Fix the ${colors.red('TAG')}`);
  }
};

exports.debugPodQ15() = async () => {
  if (await podQ.isImagePrivateRegistry()) {
    console.log(
      `${colors.red('CONFIGURE')} pulling images from a private registry`
    );
  } else {
    console.log(`The issue could be with the ${'CRI'} or ${'Kubelet'}`);
  }
};

exports.debugPodQ16() = async () => {
  (await podQ.isCrashLoopBackOff()) ? this.debugPodQ17() : this.debugPodQ18();
};

exports.debugPodQ17() = async () => {};

exports.debugPodQ18() = async () => {};
