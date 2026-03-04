export function Settings() {
  return (
    <div>
      <h1>Settings</h1>
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
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input type="checkbox" defaultChecked />
            Enable Notifications
          </label>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input type="checkbox" />
            Dark Mode
          </label>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Language
          </label>
          <select style={{ width: "100%", padding: "8px", borderRadius: "4px" }}>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
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
          Save Settings
        </button>
      </div>
    </div>
  );
}
