const dbService = require('../config/db.js')

module.export = {
    addWord: (body) => {
        const {word} = body;
        isListed = false;

        // check if the word is in the tracker table
        // if it is, update the counter 
        // if not, add it to the tracker table
        sql = ``

        return dbService.querypromise(sql)
    }
}