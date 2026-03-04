import { Link, NavLink, useNavigate } from "react-router";

export function Layout() {
  function submit() {
    // user submitted a form
    useNavigate("/done-with-form");
  }
  return (
    <div style={{ backgroundColor: "blue" }}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-class" : "")}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>This is background</h1>
      <Link to="/form">Form</Link>
    </div>
  );
}
