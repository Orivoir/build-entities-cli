const fs = require('fs') ;
const pathResolver = require('path') ;

module.exports = function( newState , currentState ) {

    Object.keys( newState ).forEach( attr => (
        currentState[ attr ] = newState[ attr ]
    ) ) ;

    fs.writeFileSync(
        pathResolver.join( __dirname , './../memory.json' )
        , JSON.stringify( currentState )
    ) ;

    return currentState ;

} ;
