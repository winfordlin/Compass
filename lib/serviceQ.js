const inquirer = require('inquirer');
const colors = require('colors');

exports.isEndPoints = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isEndPoints',
      message: `Can you see a list of ${colors.red('ENDPOINTS')}?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isEndPoints));
  return answer;
};

exports.isSelectorMatching = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isSelectorMatching',
      message: `Is the Selector ${colors.red('MATCHING')} the right Pod label?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isSelectorMatching));
  return answer;
};

exports.isIPAssigned = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isIPAssigned',
      message: `Does the Pod have an ${colors.red('IP ADDRESS')} assigned?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isIPAssigned));
  return answer;
};

exports.isVisible = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isVisible',
      message: `Can you ${colors.red('VISIT')} the app?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isVisible));
  return answer;
};

exports.isTargetPortMatching = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isTargetPortMatching',
      message: `Is the ${colors.red(
        'targetPort'
      )} on the Service matching the ${colors.red(
        'containerPort'
      )} in the Pod?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.isTargetPortMatching));
  return answer;
};

exports.canAccess = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'canAccess',
      message: `Can you ${colors.red(
        'ACCESS'
      )} the app using command: ${colors.yellow(
        `kubectl port-forward service/<service-name> 8080:<service-port>`
      )} ?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.canAccess));
  return answer;
};

exports.ingressName = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'input',
      name: 'ingressName',
      message: 'What is the name of the Ingress?',
    })
    .then((ans) => (answer = ans.ingressName));
  return answer;
};
