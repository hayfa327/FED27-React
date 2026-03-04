import { Link, Outlet } from "react-router";

export function Products() {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <header
        style={{
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
          marginBottom: "20px",
        }}
      >
        <h1>Products Store</h1>
        <Link to="/products" style={{ color: "#3498db" }}>
          ← Back to All Products
        </Link>
      </header>

      <Outlet />
    </div>
  );
}
