import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="container">
          
          <div className="element">
            <ul>
              <li className="logo"><strong>Company name</strong></li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
