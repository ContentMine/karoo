var program = require('commander')

program.command('reset-facts <index>', 'Delete the facts index <index> (if it exists) and remap it')
.command('reset-papers <index>', 'Delete the fulltext paper index <index> (if it exists) and remap it')

program.parse(process.argv)
