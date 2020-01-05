module.exports = function() {

    const properties = [] ;

    const askAgain = require('./property-again') ;

    let property = null ;

    do {

        property = {} ;

        ['name','type'].forEach( askedName => (

            require( `./property-${askedName}.js` )( property )
        ) ) ;

        properties.push( property ) ;

    } while( askAgain() ) ;

    return properties ;
} ;
