const
    {expect,assert} = require('chai')
    , memoryParse = require('./../lib/memory-parse')
;

describe('test `memory-parse` module' , () => {

    it('should be an function' , () => {

        assert.isFunction( memoryParse ) ;

    } ) ;

    const memory = memoryParse() ;

    it('should be return an object' , () => {

        assert.isObject( memory ) ;

    } ) ;

    it('should contains an property `history`' , () => {

        expect( memory ).to.have.property( 'history' ) ;

    } ) ;

    it('should be an array' , () => {

        assert.isArray( memory.history ) ;

    } ) ;

    it('should contains an property `buildIn`' , () => {

        expect( memory ).to.have.property( 'buildIn' ) ;
    } ) ;

    it('should be an array of string', () => {

        assert.isArray( memory.buildIn ) ;

        memory.buildIn.forEach( directoryName  => {

            assert.isString( directoryName ) ;
        } ) ;

    } ) ;

} ) ;
