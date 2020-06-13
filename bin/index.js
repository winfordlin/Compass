#!/usr/bin/env node

const program = require('commander');

const create = require('../lib/create/create');
const debug = require('../lib/debug/podDebug');

console.log();
program
  .command('create')
  .alias('c')
  .description('Create Kubernetes Resources')
  .action(() => {
    create.questions();
  });

program
  .command('debug')
  .alias('d')
  .description('Debug Kubernetes Resources')
  .action((args) => {
    if (args.args[0]) {
      debug.debugPodQ(args.args[0]);
    } else {
      console.log(
        'Please pass in a Pod you would like to debug, ie. kcompass debug <pod-name>'
      );
    }
  });

program.parse(process.argv);
