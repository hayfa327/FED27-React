export function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          maxWidth: "500px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Name</label>
          <input
            type="text"
            defaultValue="John Doe"
            style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            defaultValue="john@example.com"
            style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
          />
        </div>
        <button
          style={{
            backgroundColor: "#3498db",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
