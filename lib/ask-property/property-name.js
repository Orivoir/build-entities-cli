const reader = require( 'readline-sync' ) ;

module.exports = function( propertySave ) {

    propertySave.name = reader.question('property name :') ;
} ;
