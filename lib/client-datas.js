module.exports = {

    /**
     * @return {?string} if prod return **string** else return **null**
     */
    root: require('./client-root')() ,

    /**
     * @return {?object} if prod return **object** else return **null**
     * @warn read file sync for **all read this attribute** in prod
     */
    get package() {

        return require('./package-client')( this.root ) ;
    } ,

    /**
     * @return {boolean} return if it's an prod exec
     * @warn read file sync for **all read this attribute** in prod
     */
    get isProd() {

        return (
            typeof this.package === 'object' &&
            typeof this.root === 'string'
        ) ;
    }
}