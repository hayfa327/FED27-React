import { NavLink, Outlet } from "react-router";

export function Dashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar Navigation */}
      <nav
        style={{
          width: "200px",
          backgroundColor: "#2c3e50",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "20px" }}>Dashboard</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <NavLink
              to="/dashboard"
              end
              style={({ isActive }) => ({
                color: isActive ? "#3498db" : "white",
                textDecoration: "none",
              })}
            >
              Home
            </NavLink>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/profile"
              style={({ isActive }) => ({
                color: isActive ? "#3498db" : "white",
                textDecoration: "none",
              })}
            >
              Profile
            </NavLink>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/settings"
              style={({ isActive }) => ({
                color: isActive ? "#3498db" : "white",
                textDecoration: "none",
              })}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Main Content Area - Nested routes render here */}
      <main style={{ flex: 1, padding: "20px", backgroundColor: "#ecf0f1" }}>
        <Outlet />
      </main>
    </div>
  );
}
