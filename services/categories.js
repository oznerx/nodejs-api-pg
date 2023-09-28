const dbService = require('../config/db.js')

module.exports = {
    addCategory: (body) => {
        const {name, color, icon} = body;
        sql = ` INSERT INTO categories(name, color, icon)
                VALUES('${name}', '${color}', '${icon}') 
                RETURNING *`
        return dbService.querypromise(sql);
    }, 
    getAllCategories: () => {
        sql = "SELECT id, name, color, icon FROM categories"
        return dbService.querypromise(sql);
    },
    getCategory: (id) => {
        sql = ` SELECT id, name, color, icon
                FROM categories 
                WHERE id = ${id}`
        return dbService.querypromise(sql);
    },
    deleteCategory: (id) => {
        sql = ` DELETE FROM categories
                WHERE id = ${id} 
                RETURNING *`
        return dbService.querypromise(sql);
    },
    updateCategory: (id, body) => {
        const {name, color, icon} = body;
        sql = ` UPDATE categories
                SET name = '${name}', color = '${color}', icon = '${icon}'
                WHERE id = ${id} 
                RETURNING *`
        return dbService.querypromise(sql);
    }
} 
