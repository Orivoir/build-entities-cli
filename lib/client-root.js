module.exports = function() {

    if( !/node_modules/.test( __dirname ) )
        return null;

    let found = false;

    return __dirname
        .split('\\').join('/') // normalize separator
        .split('/') // explode in array ressources
        .filter( ressource => { // persist root before "node_modules" dir

            if( found ) return false;

            if( /node_modules/.test( ressource ) ) {
                found = true;
                return false;
            }

            return true;
        } )
        .join('/')
    ;

} ;
