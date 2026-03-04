export function DashboardHome() {
  return (
    <div>
      <h1>Dashboard Home</h1>
      <p>Welcome to your dashboard! Select an option from the sidebar.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Total Users</h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>1,234</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Revenue</h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>$12,345</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Orders</h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>567</p>
        </div>
      </div>
    </div>
  );
}
