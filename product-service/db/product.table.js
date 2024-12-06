const productTable = `CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR (25) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL
)`;

module.exports = { productTable }