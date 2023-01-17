import { NavLink } from "react-router-dom";

const style = {
  display: "flex",
  justifyContent: "space-around",
  gap: "5rem",
  fontSize: "30px",
  padding: "1rem",
  backgroundColor:"#0da84f",
};

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/admin-login",
    title: "Admin Login",
  },
  {
    path: "/user-login",
    title: "User Login",
  },
  {
    path: "/user-signup",
    title: "User signup",
  },
  {
    path: "/admin-dashboard",
    title: "Admin Dashboard",
  },
];
const Navbar = () => {
  const activeStyle = {
    color: "red",
    textDecoration: "none",
  };
  const defaultStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div>
      <div style={style}>
        {links.map((link) => (
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            key={link.path}
            to={link.path}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
