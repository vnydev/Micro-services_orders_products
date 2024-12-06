const { Client } = require('pg')

const client =  new Client('postgres://viney.dev:test@123@postgres:5432/vnydb')

const { orderTable } = require('../db/order.table')

const createtables = async () => {
    await (
       client.query(orderTable)
    )
}

client.connect()
.then(pc => {
    console.log('pg connect', pc)
    
    createtables()
})
.catch(e => console.log('pg error', e))

client.on('end', (d) => console.log('end', d))



module.exports =  {pg: client}