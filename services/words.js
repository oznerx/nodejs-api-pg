const dbService = require('../config/db.js')

module.exports = {
    getWord: (id) => {
        sql = ` SELECT id, word, categoryid, definition, image, suggested1, suggested2, video
                FROM words 
                WHERE id = ${id}`
        return dbService.querypromise(sql);
    },
    getAllWords: () => {
        sql = ` SELECT id, word, categoryid, definition, image, suggested1, suggested2, video
                FROM words 
                ORDER BY word`
        return dbService.querypromise(sql);
    },
    addWord: (body) => {
        const {word, categoryid, definition, image, suggested1, suggested2, video} = body;
        sql = ` INSERT INTO words(word, categoryid, definition, image, suggested1, suggested2, video)
                VALUES('${word}', '${categoryid}', '${definition}', '${image}', '${suggested1}', '${suggested2}', '${video}') 
                RETURNING *`
        return dbService.querypromise(sql);
    },
    deleteWord: (id) => {
        sql = ` DELETE FROM words
                WHERE id = ${id} 
                RETURNING *`
        return dbService.querypromise(sql);
    },
    updateWord: (id, body) => {
        const {word, categoryid, definition, image, suggested1, suggested2, video} = body;
        sql = ` UPDATE words
                SET word = '${word}', categoryid = '${categoryid}', definition = '${definition}', image = '${image}', suggested1 = '${suggested1}', suggested2 = '${suggested2}', video = '${video}'
                WHERE id = ${id} 
                RETURNING *`
        return dbService.querypromise(sql);
    },
    getWordsByCategory: (categoryid) => {
        sql = ` SELECT id, word, categoryid, definition, image, suggested1, suggested2, video
                FROM words 
                WHERE categoryid = ${categoryid}
                ORDER BY word`
        return dbService.querypromise(sql);
    } 
}