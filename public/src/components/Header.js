import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-scroll";
import themeList from "../data/themeList";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const HeaderStyles = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 10;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 70px;
  padding-right: 10px;
  padding-left: 10px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  backdrop-filter: blur(8px);
  box-shadow: 1px 1px 10px 0 rgb(163 191 199 / 5%);
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8%; */
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? "var(--lightBlue_1)" : "var(--darkBlue_3)"};
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
  }
  nav ul li {
    color: #b700ff;
    display: inline-block;
    margin: 0 0.5rem;
    a {
      border-bottom: 1px solid #421969 dotted;
      display: inline-block;
      font-size: 1.6rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--darkBlue_2)" : "var(--lightBlue_1)"};
    }
    &:hover {
      a {
        border-left: 2px solid #421969 !important;
        border-bottom: 2px solid #421969 !important;
        color: #b700ff;
        text-decoration: none;
      }
    }
    a.active {
      border-left: 2px solid #421969 !important;
      border-bottom: 2px solid #421969 !important;
      color: #b700ff;
      text-decoration: none;
    }
  }
  .navMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .themeSwitcher {
    z-index: -1;
  }
  .menuIcon,
  .closeIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 10px;
    padding: 3px;
    svg {
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--darkBlue_2)" : "var(--lightBlue_1)"};
    }
    &:hover {
      transform: scale(1);
      background-color: #8080803b;
      border-radius: 4px;
    }
  }
  .closeIcon {
    position: absolute;
    right: 10px;
    top: 10px;
    &:hover {
      background-color: #8080803b;
      svg {
        color: white;
      }
    }
  }
  .navOverlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: var(--darkBlue_3);
    opacity: 0.4;
  }
  @media only screen and (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      width: 90%;
      max-width: 250px;
      top: 0;
      right: 0;
      background: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--lightBlue_2)" : "var(--darkBlue_4)"};
      height: 100vh;
      z-index: 100;
      transform: translateX(100%);
      transition: 0.3s ease-in-out transform;
      overflow: hidden;
    }
    nav.open {
      box-shadow: -1px 4px 10px 3px rgb(0 0 0 / 16%);
      transform: translateX(0);
    }
    nav ul li {
      display: block;
      text-align: right;
      width: 100%;
      margin: 0.5rem 0;
      a {
        display: block;
        width: 100%;
      }
    }
  }
`;
export default function Header() {
  const headerRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    function disableScroll() {
      document.body.style.overflow = "hidden";
    }
    function enableScroll() {
      document.body.style.overflow = "";
    }

    if (isNavOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isNavOpen]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    });
    window.addEventListener("scroll", () => {
      if (headerRef.current && window.scrollY > 100) {
        headerRef.current.style.boxShadow =
          "0px 0px 10px 0px rgba(0, 0, 0, 0.5)";
      } else {
        headerRef.current.style.boxShadow = "none";
      }
    });
  }, []);

  return (
    <HeaderStyles ref={headerRef}>
      <div className="container">
        <div className="navigation">
          <Link to="home" smooth>
            <Logo />
          </Link>
          <div className="navMenu">
            <nav className={isMobile && isNavOpen ? "open" : undefined}>
              {isMobile && (
                <div
                  className="closeIcon"
                  tabIndex="0"
                  role="button"
                  onKeyDown={() => setIsNavOpen(false)}
                  onClick={() => setIsNavOpen(false)}
                >
                  <FiX />
                </div>
              )}
              <ul>
                <li>
                  <Link to="home" smooth activeClass="active" spy>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth activeClass="active" spy>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="Products" smooth activeClass="active" spy>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="" smooth activeClass="active" spy>
                    Learn
                  </Link>
                </li>
                <li>
                  <Link to="services" smooth activeClass="active" spy>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth activeClass="active" spy>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            {isNavOpen && (
              <div
                className="navOverlay"
                tabIndex="0"
                aria-label="overlay"
                role="button"
                onKeyDown={() => setIsNavOpen(false)}
                onClick={() => setIsNavOpen(false)}
              />
            )}
            <ThemeSwitcher />
            {isMobile && (
              <div
                className="menuIcon"
                tabIndex="0"
                role="button"
                onKeyDown={() => setIsNavOpen(true)}
                onClick={() => setIsNavOpen(true)}
              >
                <FiMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}
