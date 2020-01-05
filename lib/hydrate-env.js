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

    entityName: null,

    outputColor: require('./output-color')

} ;

module.exports = function( entityName ) {

    const env = process['build-entities-cli'] ;
    env.entityName = entityName ;

    return env ;

} ;
