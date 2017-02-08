var program = require('commander')
var canaryPerch = require('canary-perch')
var debug = require('debug')('karoo')
var auth = require('../lib/authini')

program.option('-e --host <host>', '')
.option('-i --index <index>', 'index to reset to paper schema', {required: true})
.option('-f --auth-file <auth-file>', 'ini file to read auth credentials from')

program.parse(process.argv)

function done () {
  debug('Deleted and Mapped Paper index')
}

if (program.authFile) {
  program.host = auth(program.host, program.authFile)
}

canaryPerch.index.deleteAndMapUnstructuredPaperIndex(undefined, [program.host], program.index, done)
