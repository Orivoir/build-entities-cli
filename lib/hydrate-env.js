const memory = require('./memory-parse')() ;
const clientProdDatas = require('./client-datas') ;
const pathResolver = require('path') ;

process['build-entities-cli'] = {

    memory: memory ,
    /**
     * @warn read file sync for **all read this attribute** in prod
     */
    get client() {

        if( clientProdDatas.isProd ) {

            return clientProdDatas ;
        }

        return null ;
    } ,

    devUse: null,

    get root() {

        const {client} = this;

        if( client ) {

            return client.root ;
        } else {

            if( pathResolver.isAbsolute( this.devUse ) ) {

                return this.devUse ;
            } else {

                throw 'exec in context dev but not __dirname give' ;
            }

        }

    } ,

    get buildClient() {

        const client = this.client ;

        if( client ) {

            const _package = client.package ;

            return {
                author: _package.author ,
                license: _package.license ,
                version: _package.version ,
                package: _package.name
            } ;

        } else {
            return {} ;
        }
    } ,

    setState( newState ) {

        if( typeof newState !== 'object' ) {

            throw new RangeError('arg1 should be an object') ;
        }

        const state = require('./set-state')( newState , this.memory ) ;

        this.memory = state ;

        return state ;
    } ,

    get buildPath() {

        return './' + this.memory['buildIn'].join('/') ;

    } ,

    buildExplode( path ) {

        return path
            .split('\\').join('/') // normalize separator
            .split('/') // explode in ressource ( dir name )
            .filter( ressource => { // persist valid ressource

                ressource = ressource.trim() ;

                if(
                    !ressource.length ||
                    /^[a-z]\:$/i.test( ressource ) || // disk name
                    ressource === '.'
                ) {

                    return false;
                }

                return true;

            } )
        ;

    } ,

    entityName: null,

    outputColor: require('./output-color')

} ;

module.exports = function( entityName  ,devUse = null ) {

    const env = process['build-entities-cli'] ;
    env.entityName = entityName ;

    if( typeof devUse === 'string' ) {
        env.devUse = devUse ;
    }

    return env ;
} ;
