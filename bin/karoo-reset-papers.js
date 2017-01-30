var program = require('commander')
var canaryPerch = require('canary-perch')
var debug = require('debug')('karoo')

program.option('-e --host <host>', '')

program.parse(process.argv)

function done () {
  debug('Deleted and Mapped Paper index')
}

canaryPerch.deleteAndMapUnstructuredPaperIndex(undefined, [program.host], 'fulltext', done)
