const outputLog = require('./output-log') ;
const buildDirs = require('./output-build-dir') ;
const pathResolver = require('path') ;
const builderEntity = require('build-entities') ;

module.exports = function( properties ) {

    const env = process['build-entities-cli'] ;
    const {root} = env ;

    if( !properties ) {

        outputLog.else() ;
    }

    else {

        const dirsCreate = buildDirs( pathResolver.join( root , env.buildPath ) ) ;

        outputLog.buildDirs( dirsCreate ) ;

        const response = builderEntity.sync({
            name: env.entityName ,
            properties: properties ,
            client: env.buildClient
        }) ;


        if( response.success ) {

            const status = response.file( pathResolver.join( root , env.buildPath ) ) ;

            if( status ) {

                outputLog.createFile( env.entityName ) ;

            } else {
                // path not exists
            }

        } else {

            // tanpis :'(
        }

    }

} ;