const memory = require('./memory-parse')() ;
const clientProdDatas = require('./client-datas') ;

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

    setState( newState ) {

        if( typeof newState !== 'object' ) {

            throw new RangeError('arg1 should be an object') ;
        }

        const state = require('./set-state')( newState , this.memory ) ;

        this.memory = state ;

        return state ;
    } ,

    entityName: null,

    outputColor: require('./output-color')

} ;

module.exports = function( entityName ) {

    const env = process['build-entities-cli'] ;
    env.entityName = entityName ;

    return env ;

} ;
