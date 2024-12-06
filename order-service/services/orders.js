const { pg } = require('../config/postgresdb')
const axios = require('axios')

const fetchProducts = async (id) => {
    const { data } = await axios.get(`http://products:3001/products/${id}`)

    return data
}

const getOrderById = async (id) => {
    try {
        const order = await pg.query(`select * from orders where id = ${id}`)

        return order.rows
    } catch(e) {
        console.log('Error:getOrderById', e)
        throw new Error(e)
    }
}

const createOrder = async (data) => {

    try {
        const  { product_id, quantity } = data // request body
        
        const { data: products } = await fetchProducts(product_id)
       
        if(products[0].stock < quantity) {
            return 'Product is out of stock.'
        }
        
        const total_amount = products[0].price * quantity

        await pg.query(`INSERT INTO orders (product_id, total_amount, quantity) VALUES (${product_id}, ${total_amount}, ${quantity});`)

        return 'Successfully created the order.'
    } catch(e) {
        console.log('Error:createOrder', e)
        throw new Error(e)
    }

}

module.exports = {
    createOrder,
    getOrderById,
    fetchProducts
}