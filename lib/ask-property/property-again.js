const reader = require( 'readline-sync' ) ;

module.exports = function() {

    const again = reader.keyInYN( 'add another property ?' ) ;

    return ( typeof again === 'string' || again ) ;
} ;
