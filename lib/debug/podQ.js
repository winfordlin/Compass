const inquirer = require('inquirer');
const colors = require('colors');

exports.isPendingPod = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isPending',
      message: `Are there any ${colors.red('PENDING')} Pods?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isPending));
  return answer;
};

exports.isRunningPod = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isRunning',
      message: `Are the Pod ${colors.red('RUNNING')}?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isRunning));
  return answer;
};

exports.isClusterFull = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isClusterFull',
      message: `Is the cluster ${colors.red('FULL')}?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isClusterFull));
  return answer;
};

exports.isPodReady = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isPodReady',
      message: `Are the Pods ${colors.red('READY')}?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isPodReady));
  return answer;
};

exports.canAccess = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'canAccess',
      message: `Can you ${colors.red('ACCESS')} the app?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.canAccess));
  return answer;
};

exports.isExposedAndListening = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isExposedAndListening',
      message: `Is the port exposed by container correct and listening on ${colors.red(
        '0.0.0.0'
      )}?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isExposedAndListening));
  return answer;
};

exports.isReadinessProbe = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isReadinessProbe',
      message: `Is the ${colors.red('READINESS PROBE')} failing?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isReadinessProbe));
  return answer;
};

exports.isResourceQuotaLimit = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isResourceQuotaLimit',
      message: `Are you hitting the ${colors.red('RESOURCEQUOTA')} limits?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isResourceQuotaLimit));
  return answer;
};

exports.isPendingPersistentVolumesClaim = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isPendingPersistentVolumesClaim',
      message: `Are you mounting a ${colors.red(
        'PENDING'
      )} PersistentVolumeClaim?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isPendingPersistentVolumesClaim));
  return answer;
};

exports.isAssignedNode = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isAssignedNode',
      message: `Is the Pod ${colors.red('assigned')} to the Node?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isAssignedNode));
  return answer;
};

exports.isLogVisible = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isLogVisible',
      message: `Can you see the ${colors.red('LOGS')} for the app?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isLogVisible));
  return answer;
};

exports.isContainerDead = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isContainerDead',
      message: `Did the container ${colors.red('DIE')} too quickly?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isContainerDead));
  return answer;
};

exports.isImagePullBackOff = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isImagePullBackOff',
      message: `Is the Pod status ${colors.red('ImagePullBackoff')}?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isImagePullBackOff));
  return answer;
};

exports.isImageName = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isImageName',
      message: `Is the ${colors.red('IMAGE NAME')} correct?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isImageName));
  return answer;
};

exports.isImageTagValid = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isImageTagValid',
      message: `Is the Image Tag ${colors.red('VALID')}? Does it exist?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isImageName));
  return answer;
};

exports.isImagePrivateRegistry = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isImagePrivateRegistry',
      message: `Are you pulling images from a ${colors.red(
        'PRIVATE REGISTRY'
      )}?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isImagePrivateRegistry));
  return answer;
};

exports.isCrashLoopBackOff = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isCrashLoopBackOff',
      message: `Is the Pod status ${colors.red('CrashLoopBackOff')}?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isCrashLoopBackOff));
  return answer;
};
