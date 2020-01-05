module.exports = function( entityNameNormalize ) {

    if( typeof entityNameNormalize !== 'string' ) {

        throw new RangeError('arg1 should be an string') ;
    }

    return ( /^[A-Z]{1}[a-zA-Z\d_]{0,254}$/.test( entityNameNormalize ) );

} ;

