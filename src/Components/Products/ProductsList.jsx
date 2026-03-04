import { Link } from "react-router";

const products = [
  { id: 1, name: "Laptop Pro", price: 1299, category: "Electronics" },
  { id: 2, name: "Wireless Headphones", price: 199, category: "Electronics" },
  { id: 3, name: "Running Shoes", price: 89, category: "Sports" },
  { id: 4, name: "Coffee Maker", price: 59, category: "Home" },
];

export function ProductsList() {
  return (
    <div>
      <h2>All Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
            >
              <div
                style={{
                  height: "150px",
                  backgroundColor: "#ecf0f1",
                  borderRadius: "4px",
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7f8c8d",
                }}
              >
                Product Image
              </div>
              <h3 style={{ margin: "0 0 10px" }}>{product.name}</h3>
              <p style={{ color: "#7f8c8d", margin: "0 0 10px" }}>
                {product.category}
              </p>
              <p
                style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "0" }}
              >
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
