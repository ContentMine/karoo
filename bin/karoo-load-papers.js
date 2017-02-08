var program = require('commander')
var canaryPerch = require('canary-perch')
var debug = require('debug')('karoo')

program.option('-e --host <host>', 'ElasticSearch host (including port)', {required: true})
.option('-c --ctree <ctree>', 'CTree to upload', {required: true})
.option('-i --index <index>', 'index to load papers into', {required: true})

program.parse(process.argv)

debug('Uploading papers to: ' + program.host +
' from directory: ' + program.ctree +
' to index: ' + program.index +
'with document type: ' + program.type)

function done () {
  debug('paper uploading done')
}

canaryPerch.loadEuPMCFullTexts(program.ctree, [program.host], program.index, done)
