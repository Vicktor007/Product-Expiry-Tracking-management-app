import React, { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { Outlet, NavLink } from "react-router-dom";
export default function Root() {
  const authenticator = useContext(AuthenticationContext);
  return (
    <div className="container d-flex shadow border">
      <nav className="navbar bg-accept text-light index border">
        <ul className="navbar-nav me-auto border">
          <NavLink
            to={`/home/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>{" "}
          <NavLink
            to={`/about/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            About
          </NavLink>{" "}
          <NavLink
            to={`/contact/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Contact
          </NavLink>{" "}
          {authenticator.isAuthenticated && (
            <NavLink
              to={`/Products/`}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Personnel
            </NavLink>
          )}
          {authenticator.isAuthenticated && (
            <NavLink className={"text-warning"} onClick={authenticator.logout}>
              Logout
            </NavLink>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
