const { Client } = require('pg')

const client =  new Client('postgres://viney.dev:test@123@postgres:5432/vnydb')

const { productTable } = require('../db/product.table')


client.connect()
.then(pc => {
    console.log('pg connect', pc)
    
    createtables()
})
.catch(e => console.log('pg error', e))

client.on('end', (d) => console.log('end', d))

const createtables = async () => {
 await (
    client.query(productTable)
 )
}

module.exports =  {pg:client}