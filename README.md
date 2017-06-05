# karoo
CLI tool for loading fulltexts in CProject format into elasticsearch and extracting facts from them before storing these facts in a different elasticsearch index

## Commands
Karoo uses a command structure similar to git. The top level commands are as follows:
```
  Usage: karoo [options] [command]


  Commands:

    reset-facts    Delete the facts index <index> (if it exists) and remap it
    reset-papers   Delete the fulltext paper index <index> (if it exists) and remap it
    load-papers    Loads papers froma given directory into an index
    extract        extract facts from an index to another index
    help [cmd]     display help for [cmd]

```

These are documented in detail below
### reset-facts
```
    -h, --help                  output usage information
    -e --host <host>            Elasticsearch host
    -i --index <index>          index to reset for facts
    -f --auth-file <auth-file>  ini file to read auth credentials from
```

### reset-papers
```
    -h, --help                  output usage information
    -e --host <host>            
    -i --index <index>          index to reset to paper schema
    -f --auth-file <auth-file>  ini file to read auth credentials from
```

### load-papers
```
    -h, --help                  output usage information
    -e --host <host>            ElasticSearch host (including port)
    -c --ctree <ctree>          CTree to upload
    -i --index <index>          index to load papers into
    -f --auth-file <auth-file>  ini file to read auth credentials from
```

### extract
```
    -h, --help                      output usage information
    -e --host <host>                ElasticSearch host (including port)
    -i --index <index>              index to extract facts from
    -o --output <index>             index to putput extracted facts to
    -x --input-type <input-type>    elastic search input document type
    -y --output-type <output-type>  elastic seach output document type
    -d --dict-dir <dict-dir>        dictionary directory
    -f --auth-file <auth-file>      ini file to read auth credentials from
```
