const pathResolver = require('path') ;
const fs = require('fs') ;

/**
 * @module memory-parse read , parse and return file memory.json
 * @exports Function
 */
module.exports =
/**
 * @return {{history:[?string],buildIn:[string]}}
 */
function() {

    const path = pathResolver.join( __dirname , './../memory.json' ) ;

    return JSON.parse( fs.readFileSync( path , 'utf-8' ) ) ;
} ;
