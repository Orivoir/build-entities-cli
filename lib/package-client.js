const fs = require('fs') ;
const pathResolver = require('path') ;

module.exports = function( root ) {

    if(
        typeof root !== 'string' ||
        !pathResolver.isAbsolute( root )
    ) {
        // is not prod exec
        return null ;
    }

    const path = pathResolver.join( root , './package.json' ) ;

    if( fs.existsSync( path ) ) {

        try {

            return JSON.parse( fs.readFileSync( path ) ) ;

        } catch( SyntaxError ) {
            // package.json client have error
            return {} ;
        }

    } else {
        // is prod but package.json do not exists/found ...
        return {} ;
    }

} ;
