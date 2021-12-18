import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import styled from "styled-components";
import { FaAlignRight } from "react-icons/fa";
import pageLinks from "../constants/links";
import { Link } from "gatsby";
import Language from "./Language";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { debounce } from "../utilities/helpers";

const Navbar = ({ toggleSidebar }) => {
  const { t } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 60) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 250);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Wrapper>
      <div className={visible ? "navbar" : "navbar-fixed"}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="web dev" />
            <Language />
            <button type="button" className="toggle-btn">
              <FaAlignRight onClick={toggleSidebar} />
            </button>
          </div>

          <div className="nav-links">
            {pageLinks.map((link) => {
              return (
                <Link key={link.id} to={link.url}>
                  {t(link.text)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    z-index: 200;
    background: var(--clr-white);
  }

  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    z-index: 200;
    background: var(--clr-white);
    transition: var(--transition);
    border-bottom: 0.1rem solid var(--clr-primary-5);

    box-shadow: var(--dark-shadow);
  }

  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header img {
    margin-bottom: 0.375rem;
  }
  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
  }
  .toggle-btn:hover {
    color: var(--clr-primary-2);
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
    }

    .nav-links a {
      margin-right: 2rem;
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
    }
    .nav-links a:hover {
      color: var(--clr-primary-5);
      box-shadow: 0px 2px var(--clr-primary-5);
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }

  @media screen and (min-width: 992px) {
    background: transparent;
  }
`;
