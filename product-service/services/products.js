const { pg } = require('../config/postgresdb')

const getProductById = async (id) => {
    try {
        const products = await pg.query(`select * from products where id = ${id}`)

        return products.rows
    } catch(e) {
        console.log('Error:getProductById', e)
        throw new Error(e)
    }
}

const getAllproducts = async () => {
    try {
        const products = await pg.query('select * from products')

        return products.rows
    } catch(e) {
        console.log('Error:getAllproducts', e)
        throw new Error(e)
    }
}

const createProduct = async (data) => {

    try {
        const  { name, price, stock } = data
        await pg.query(`INSERT INTO products (name, price, stock) VALUES ('${name}', ${price}, '${stock}');`)

        return 'Successfully created the product.'
    } catch(e) {
        console.log('Error:createProduct', e)
        throw new Error(e)
    }

}

module.exports = {
    createProduct,
    getAllproducts,
    getProductById
}