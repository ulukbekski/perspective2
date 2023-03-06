import React from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logo from "../../assets/all-images/p__logo-oranges.png";
const navLinks = [
  {
    path: "/",
    display: "Главная",
  },
  {
    path: "/countries",
    display: "Программы",
  },
  {
    path: "/contact",
    display: "Связаться",
  },
  {
    path: "/gallery",
    display: "Галерея",
  },
  {
    path: "/about",
    display: "О нас",
  },
];

const Header = () => {
  const menuRef = React.useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* <div></div> */}

      <div className="header__parent">
        <div className="main__navbar">
          <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
              <span className="mobile__menu">
                <i className="ri-menu-line" onClick={toggleMenu}></i>
              </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  <Link to="/home">
                    <img
                      className="logos"
                      src={logo}
                      alt="Картинка не загружено"
                    />
                  </Link>
                  {navLinks.map((item, index) => (
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__item"
                          : "nav__item"
                      }
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>
              {/* <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div> */}
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Header;
