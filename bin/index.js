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
  .action(() => {
    debug.debugPodQ();
  });

program.parse(process.argv);
