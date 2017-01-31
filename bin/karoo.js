var program = require('commander')

program.command('reset-facts', 'Delete the facts index <index> (if it exists) and remap it')
.command('reset-papers', 'Delete the fulltext paper index <index> (if it exists) and remap it')
.command('load-papers', 'Loads papers froma given directory into an index')

program.parse(process.argv)
