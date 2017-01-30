var program = require('commander')
var canaryPerch = require('canary-perch')
var debug = require('debug')('karoo')

program.option('-e --host <host>', '')

program.parse(process.argv)

function done () {
  debug('Deleted and Mapped Fact index')
}

canaryPerch.deleteAndMapFactIndex(undefined, [program.host], done)
