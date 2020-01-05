const
    {expect,assert} = require('chai')
    ,outputColor = require('./../lib/output-color')
;

describe('test `output-color` module' , () => {

    it('should be an object' , () => {

        assert.isObject( outputColor ) ;

    } ) ;

    describe('should contains methods' , () => {

        it('`checkWorker`' , () => {

            expect( outputColor ).to.have.property( 'checkWorker' ) ;
            assert.isFunction( outputColor.checkWorker ) ;

        } ) ;

        it('`setWorker`' , () => {

            expect( outputColor ).to.have.property( 'setWorker' ) ;
            assert.isFunction( outputColor.setWorker ) ;

        } ) ;

        it('`out`' , () => {

            expect( outputColor ).to.have.property( 'out' ) ;
            assert.isFunction( outputColor.out ) ;

        } ) ;

        it('`error`' , () => {

            expect( outputColor ).to.have.property( 'error' ) ;
            assert.isFunction( outputColor.error ) ;

        } ) ;

        it('`success`' , () => {

            expect( outputColor ).to.have.property( 'success' ) ;
            assert.isFunction( outputColor.success ) ;

        } ) ;

        it('`info`' , () => {

            expect( outputColor ).to.have.property( 'info' ) ;
            assert.isFunction( outputColor.info ) ;

        } ) ;

    } ) ;

    it('should \\throw RangeError' , () => {

        const fxRangeError = () => outputColor.info() ;

        expect( fxRangeError ).to.throw( RangeError , 'arg1 and arg2 should be string with length greather than 1' ) ;

    } ) ;

    it('should return `self`' , () => {

        let self = outputColor.info('info' , 'blah !' ) ;

        expect( outputColor ).to.equal( self ) ;

        self = outputColor.error('error' , 'blah !' ) ;

        expect( outputColor ).to.equal( self ) ;

        self = outputColor.success('success' , 'blah !' ) ;

        expect( outputColor ).to.equal( self ) ;

    } ) ;

} ) ;
