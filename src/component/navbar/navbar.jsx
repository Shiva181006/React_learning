import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <div className="main_container">
        <div className="container">
          <nav>
            <div className="header">
              <div className="container_logo">
                <img
                  src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg"
                  alt="Logo"
                />{" "}
                <span>logo</span>
              </div>
              <div className="link_content">
                <ul className="li_tag">
                  <li className="link_container">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="link_container">
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li className="link_container">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
