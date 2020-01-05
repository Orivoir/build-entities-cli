const outputColor = require('./../output-color') ;

module.exports = {

    else: function() {

        outputColor.error('error : ' , 'entity name is invalid' ) ;
    } ,

    buildDirs( dirs ) {

        if( dirs instanceof Array ) {

            dirs.forEach( dir => {

                outputColor.success('success append directory' , `: ${dir.path}` ) ;

            } ) ;
        }
    } ,

    createFile( entityName ) {

        const env = process['build-entities-cli']

        outputColor.success('success create file' , `: ${env.buildPath}/${entityName}.js` ) ;

    }

} ;
