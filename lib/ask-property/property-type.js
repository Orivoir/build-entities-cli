const reader = require('readline-sync') ;

module.exports = function( propertySave ) {

    const types = ['string','date','boolean','array','number','object','relation'] ;

    const i = reader.keyInSelect( types , 'Which data type ?' ) ;

    if( !types[ i ] ) {
        propertySave.type = 'string' ;

    }
    else if( types[ i ] === 'relation' ) {

        propertySave.relation = true;
        propertySave.type = reader.question('relation with entity name :') ;
    }
    else {

        propertySave.type = types[i] ;
    }
} ;
