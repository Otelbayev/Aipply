import React from "react";
import { Container } from "./header.style";
import logo from "../../assets/icons/logo.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMenuContext } from "../../context/menu-context";
import { useScrollContext } from "../../context/scroll-context";
import { useScroll } from "../../hooks/useScroll";

const Header = () => {
  const { showMenu, setShowMenu } = useMenuContext();
  const { aboutRef, courseRef, contactRef } = useScrollContext();

  const { path } = useParams();
  const navigate = useNavigate();

  const redirectToHome = (ref) => {
    navigate("/");
    setShowMenu(false);
    setTimeout(() => {
      useScroll(ref);
    }, 0);
  };

  return (
    <Container open={showMenu}>
      <div className="container">
        <header>
          <div className="header">
            {showMenu && (
              <div
                onClick={() => setShowMenu(false)}
                className="black-bg"
              ></div>
            )}
            <button
              id="nav-icon2"
              onClick={() => setShowMenu(!showMenu)}
              className={`btn header__menu ${showMenu && "open"}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link to="/">
              <img
                loading="lazy"
                effect="blur"
                src={logo}
                alt=""
                className="header__logo"
              />
            </Link>
            <nav className="header__nav">
              <button
                onClick={() => redirectToHome(aboutRef)}
                className="header__nav--item"
              >
                Biz haqimizda
              </button>
              <button
                onClick={() => redirectToHome(courseRef)}
                className="header__nav--item"
              >
                Kurslar
              </button>
              <button
                onClick={() => redirectToHome(contactRef)}
                className="header__nav--item"
              >
                Kontakt
              </button>
            </nav>
            <button
              onClick={() => redirectToHome(courseRef)}
              className="header__button btn"
            >
              Kurslarni ko’rish
            </button>
          </div>
        </header>
      </div>
    </Container>
  );
};

export default Header;
