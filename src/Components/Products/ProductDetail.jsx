import { useParams, NavLink, Outlet } from "react-router";

const products = {
  1: { id: 1, name: "Laptop Pro", price: 1299, category: "Electronics" },
  2: { id: 2, name: "Wireless Headphones", price: 199, category: "Electronics" },
  3: { id: 3, name: "Running Shoes", price: 89, category: "Sports" },
  4: { id: 4, name: "Coffee Maker", price: 59, category: "Home" },
};

export function ProductDetail() {
  const { productId } = useParams();
  const product = products[productId];

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            height: "300px",
            backgroundColor: "#ecf0f1",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7f8c8d",
            fontSize: "1.5rem",
          }}
        >
          Product Image
        </div>
        <div>
          <p style={{ color: "#7f8c8d", margin: "0 0 5px" }}>
            {product.category}
          </p>
          <h2 style={{ margin: "0 0 15px" }}>{product.name}</h2>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#27ae60",
              margin: "0 0 20px",
            }}
          >
            ${product.price}
          </p>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            This is a great product with amazing features. Product ID:{" "}
            <strong>{productId}</strong>
          </p>
          <button
            style={{
              backgroundColor: "#3498db",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              marginTop: "15px",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Nested tabs for product details */}
      <nav
        style={{
          borderBottom: "2px solid #ecf0f1",
          marginBottom: "20px",
        }}
      >
        <NavLink
          to={`/products/${productId}`}
          end
          style={({ isActive }) => ({
            display: "inline-block",
            padding: "10px 20px",
            textDecoration: "none",
            color: isActive ? "#3498db" : "#666",
            borderBottom: isActive ? "2px solid #3498db" : "none",
            marginBottom: "-2px",
          })}
        >
          Specifications
        </NavLink>
        <NavLink
          to={`/products/${productId}/reviews`}
          style={({ isActive }) => ({
            display: "inline-block",
            padding: "10px 20px",
            textDecoration: "none",
            color: isActive ? "#3498db" : "#666",
            borderBottom: isActive ? "2px solid #3498db" : "none",
            marginBottom: "-2px",
          })}
        >
          Reviews
        </NavLink>
      </nav>

      {/* Nested route content renders here */}
      <Outlet />
    </div>
  );
}
