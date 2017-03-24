var program = require('commander')
var canaryPerch = require('canary-perch')
var debug = require('debug')('karoo')
var auth = require('../lib/authini')

program.option('-e --host <host>', 'Elasticsearch host', {required: true} )
.option('-i --index <index>', 'index to reset for facts', {required: true})
.option('-f --auth-file <auth-file>', 'ini file to read auth credentials from')

program.parse(process.argv)

if (program.authFile) {
  program.host = auth(program.host, program.authFile)
}

function done () {
  debug('Deleted and Mapped Fact index')
}

canaryPerch.index.deleteAndMapFactIndex(undefined, [program.host], program.index, done)
