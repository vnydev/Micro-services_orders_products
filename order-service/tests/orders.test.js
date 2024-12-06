const orderService = require('../services/orders')

jest.mock('axios')
jest.mock('../config/postgresdb', () => {
    return {
        pg: {
            query: jest.fn()
        }
    }
})

describe('order service', () => {

    it('should fetch order by id', async() => {
        const mockData = {
            "data": [
                {
                    "id": 2,
                    "product_id": 3,
                    "total_amount": 500,
                    "quantity": 2,
                    "create_at": "2024-12-06T17:08:36.109Z"
                }
            ]
        }
        orderService.getOrderById = jest.fn().mockImplementation(() => Promise.resolve(mockData))
        const order = await orderService.getOrderById(2)

        expect(order).toEqual(mockData)
    });

    it('should create the order', async () => {
        const mockData = {
            "data": [
                {
                    "id": 1,
                    "name": "Apple Iphone 16",
                    "price": 500,
                    "stock": 10
                }
            ]
        }
        const body = {
            "product_id": 1,
            "quantity": 2
        }
        orderService.fetchProducts = jest.fn().mockImplementation(() => Promise.resolve(mockData))
        orderService.createOrder = jest.fn().mockImplementation(() => Promise.resolve('Successfully created the order.'))

        const orderCreated = await orderService.createOrder(body)

        expect(orderCreated).toEqual('Successfully created the order.')
    });
})