const reader = require('readline-sync') ;

module.exports = function() {

    const env = process['build-entities-cli'] ;
    const {entityName} = env ;

    const currentBuild = reader.keyInYN(`create file ${entityName}.js in ${env.buildPath}`) ;

    if( !(typeof currentBuild === 'string' || currentBuild) ) {

        let newBuildIn = reader.question(`where create file [${env.buildPath}] ? :`) ;

        newBuildIn = env.buildExplode( newBuildIn ) ;

        if( newBuildIn.length >= 1 ) {

            env.setState( {
                buildIn: newBuildIn
            } ) ;
        }

    }

} ;
