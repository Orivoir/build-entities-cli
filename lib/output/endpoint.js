const outputLog = require('./output-log') ;
const buildDirs = require('./output-build-dir') ;
const pathResolver = require('path') ;
const builderEntity = require('build-entities') ;

module.exports = function( properties ) {

    const env = process['build-entities-cli'] ;

    if( !properties ) {

        outputLog.else() ;
    }

    else {

        const dirsCreate = buildDirs( pathResolver.join( __dirname , env.buildPath ) ) ;

        outputLog.buildDirs( dirsCreate ) ;

        const response = builderEntity.sync({
            name: env.entityName ,
            properties: properties ,
            client: env.buildClient
        }) ;

        if( response.success ) {

            const status = response.file( pathResolver.join( __dirname , env.buildPath ) ) ;

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