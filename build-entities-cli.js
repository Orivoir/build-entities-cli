#!/usr/bin/env node

const args = process.argv.slice( 2 , ) ;
let entityName = args[ 0 ] ;

if( !entityName ) {

    const askEntityName = require('./lib/ask-entity-name') ;
    entityName = askEntityName() ;
}

const normalize = require('./lib/normalize-entity-name')( entityName ) ;
const checker = require('./lib/check-entity-name')( normalize ) ;
const output = require('./lib/output/endpoint') ;

if( checker ) {

    const hydrateEnv = require('./lib/hydrate-env') ;

    hydrateEnv( normalize ) ;

    const askProperty = require('./lib/ask-property/endpoint') ;

    const properties = askProperty() ;

    output( properties ) ;

} else {
    // entity name is not valid
    output( null ) ;
}
