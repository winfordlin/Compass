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
