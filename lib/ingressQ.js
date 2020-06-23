const inquirer = require('inquirer');
const colors = require('colors');

exports.canSeeBackends = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'canSeeBackends',
      message: `Can you see a list of Backends?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.canSeeBackends));
  return answer;
};

exports.matchesServices = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'matchesServices',
      message: `Are the serviceName and servicePort matching the Service?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.matchesServices));
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
        `kubectl port-forward <ingress-pod-name> 8080:<ingress-port>`
      )} ?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.canAccess));
  return answer;
};

exports.isInternetVisible = async () => {
  let answer = null;
  await inquirer
    .prompt({
      type: 'confirm',
      name: 'isInternetVisible',
      message: `The app should be working. Can you visit it from the public internet?`,
      default: 'Y',
    })
    .then((ans) => (answer = ans.canAccess));
  return answer;
};
