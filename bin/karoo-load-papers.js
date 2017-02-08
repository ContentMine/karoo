var program = require('commander')
var canaryPerch = require('canary-perch')
var debug = require('debug')('karoo')
var auth = require('../lib/authini')

program.option('-e --host <host>', 'ElasticSearch host (including port)', {required: true})
.option('-c --ctree <ctree>', 'CTree to upload', {required: true})
.option('-i --index <index>', 'index to load papers into', {required: true})
.option('-f --auth-file <auth-file>', 'ini file to read auth credentials from')

program.parse(process.argv)

if (program.authFile) {
  program.host = auth(program.host, program.authFile)
}

debug('Uploading papers to: ' + program.host +
' from directory: ' + program.ctree +
' to index: ' + program.index +
'with document type: ' + program.type)

function done () {
  debug('paper uploading done')
}

canaryPerch.index.loadEuPMCFullTexts(program.ctree, [program.host], program.index, done)
