const chalk = require('chalk') ;

module.exports = {

    checkWorker() {

        const {colorText,otherText} = this ;

        if(
            typeof colorText !== 'string' ||
            typeof otherText !== 'string' ||
            colorText.length < 1 ||
            otherText.length < 1
        ) {
            throw new RangeError('arg1 and arg2 should be string with length greather than 1') ;
        }

        return this;

    } ,

    setWorker( colorText , otherText ) {

        this.colorText = colorText ;
        this.otherText = otherText ;

        this.checkWorker() ;

        return this;
    } ,

    out( r , g , b ) {

        console.log(
            chalk.rgb( r , g , b ).bold( this.colorText ) + ' ' +
            this.otherText
        ) ;

        return this;
    } ,

    error( colorText , otherText ) {

        this
            .setWorker( colorText , otherText )
            .out( 192 , 42 , 71 )
        ;

        return this;

    } ,

    success( colorText , otherText ) {

        this
            .setWorker( colorText , otherText )
            .out( 42 , 192 , 62 )
        ;

        return this;
    } ,

    info( colorText , otherText ) {

        this
            .setWorker( colorText , otherText )
            .out( 42 , 71 , 195 )
        ;

        return this;
    }

} ;
