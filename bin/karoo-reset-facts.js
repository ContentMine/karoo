var program = require('commander')
var canaryPerch = require('canary-perch')
var debug = require('debug')('karoo')

program.option('-e --host <host>', '')
.option('-i --index <index>', 'index to reset for facts', {required: true})

program.parse(process.argv)

function done () {
  debug('Deleted and Mapped Fact index')
}

canaryPerch.index.deleteAndMapFactIndex(undefined, [program.host], program.index, done)
