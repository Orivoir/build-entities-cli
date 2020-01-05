module.exports = function( brutEntityName ) {

    if( typeof brutEntityName !== 'string' ) {

        throw new RangeError('arg1 should be an string') ;
    }

    if( brutEntityName.indexOf(' ') !== -1 ) {
        brutEntityName = brutEntityName.split(' ')[0] ;
    }

    brutEntityName = brutEntityName.trim() ;

    // capitalize string
    brutEntityName = brutEntityName.charAt( 0 ).toUpperCase() + brutEntityName.slice( 1 , ) ;

    return brutEntityName ;

} ;
