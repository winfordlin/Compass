#!/usr/bin/env node

const program = require('commander');
const debug = require('../lib/podDebug');

console.log();

program
  .command('debug')
  .alias('d')
  .description('Debug Kubernetes Resources')
  .action((args) => {
    if (args.args[0]) {
      debug.debugPodQ(args.args[0]);
    } else {
      console.log('Please pass in a pod name, ie. kcompass debug <pod-name>');
    }
  });

program.parse(process.argv);
