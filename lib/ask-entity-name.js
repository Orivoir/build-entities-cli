const reader = require('readline-sync') ;

module.exports = function() {

    const entityName = reader.question('entity name :') ;

    return entityName ;
} ;
