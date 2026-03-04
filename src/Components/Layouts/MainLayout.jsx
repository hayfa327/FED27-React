import { NavLink, Outlet } from "react-router";

export function MainLayout() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header/Navbar - shared across all child routes */}
      <header
        style={{
          backgroundColor: "#2c3e50",
          padding: "0 20px",
        }}
      >
        <nav
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white", fontSize: "1.5rem" }}>MyApp</h1>
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <NavLink
                to="/"
                end
                style={({ isActive }) => ({
                  color: isActive ? "#3498db" : "white",
                  textDecoration: "none",
                  padding: "20px 10px",
                  display: "block",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "#3498db" : "white",
                  textDecoration: "none",
                  padding: "20px 10px",
                  display: "block",
                })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                style={({ isActive }) => ({
                  color: isActive ? "#3498db" : "white",
                  textDecoration: "none",
                  padding: "20px 10px",
                  display: "block",
                })}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "#3498db" : "white",
                  textDecoration: "none",
                  padding: "20px 10px",
                  display: "block",
                })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content - child routes render here */}
      <main style={{ flex: 1, padding: "40px 20px", backgroundColor: "#f5f5f5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Outlet />
        </div>
      </main>

      {/* Footer - shared across all child routes */}
      <footer
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0 }}>© 2026 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
