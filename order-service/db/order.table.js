const orderTable = `CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    product_id INT,
    total_amount INT NOT NULL,
    quantity INT NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_products FOREIGN KEY(product_id)
    REFERENCES products(id)
)`;

module.exports = { orderTable }