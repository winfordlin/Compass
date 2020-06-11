#!/usr/bin/env node

const program = require('commander');

const create = require('../lib/create');

console.log();
program
  .command('create')
  .alias('c')
  .description('Create Kubernetes Resources')
  .action(function () {
    create.questions();
  });

program.parse(process.argv);
