const inquirer = require('inquirer');
const fuzzy = require('fuzzy');
var _ = require('lodash');
const options = require('./options');
const { exec } = require('child_process');

//--------------------------- Ask Questions ------------------------------//

exports.questions = async () => {
  let answerSet = null;
  let deploymentScale = 1;

  await inquirer.prompt(options.questionList).then((answer) => {
    answerSet = answer;
  });

  this.createResource(
    answerSet.name,
    answerSet.resourceType,
    answerSet.namespace,
    answerSet.labels
  );
};

//--------------------------- Create Resource ------------------------------//

inquirer.registerPrompt(
  'autocomplete',
  require('inquirer-autocomplete-prompt')
);

let searchDockerImages = (answers, input) => {
  input = input || '';
  return new Promise(function (resolve) {
    setTimeout(function () {
      var fuzzyResult = fuzzy.filter(input, options.officialDockerImages);
      resolve(
        fuzzyResult.map(function (el) {
          return el.original;
        })
      );
    }, _.random(30, 500));
  });
};

exports.createResource = (name, type, namespace = 'default', labels = '') => {
  inquirer
    .prompt({
      type: 'autocomplete',
      name: 'image',
      //strict autocomplete
      suggestOnly: true,
      message: `Image:`,
      source: searchDockerImages,
      pageSize: 5,
      validate: function (val) {
        return val ? true : 'Type something!';
      },
    })
    .then((answer) => {
      let isLabel = labels === '' ? labels : `-l ${labels}`;
      let deplomentCommand = `kubectl run ${name} --image=${answer.image} --namespace=${namespace} -l ${labels}`;
      let podCommand = `kubectl run ${name} --generator=run-pod/v1 --image=${answer.image} --namespace=${namespace} ${isLabel}`;

      // console.log();
      // if (type === 'Pod') console.log('Command ran: ' + podCommand);
      // if (type === 'Deployment') console.log(deplomentCommand);
      // console.log();
      console.log(podCommand);
      exec(podCommand, (error, stdout, stderr) => {
        if (error) {
          return;
        }
        if (stderr) {
          return;
        }
        console.log(stdout);
      });

      exec('kubectl get pods', (error, stdout, stderr) => {
        if (error) {
          return;
        }
        if (stderr) {
          return;
        }
        console.log(stdout);
      });
    });
};
