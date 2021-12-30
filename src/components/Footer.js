import React from "react";
import socialLinks from "../constants/social_links";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <Wrapper>
      <div className="logo-box">
        <StaticImage
          src="../assets/images/logo-eama.png"
          alt="Enrique Adelino Montes Araujo"
          className="logo"
        />
        <div className="social-links">
          {socialLinks.map((link) => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <Link to="/about" className="link">
                <Trans>about</Trans>
              </Link>
            </li>
            <li class="footer__item">
              <Link to="/contact" className="link">
                <Trans>Contact</Trans>
              </Link>
            </li>

            <li class="footer__item">
              <Link to="/privacy" className="link">
                <Trans>Privacy policy</Trans>
              </Link>
            </li>
          </ul>
        </div>

        <div className="copy">
          <h4>
            <Trans>copyright</Trans> &copy; {new Date().getFullYear()}{" "}
            <span>Enrique Adelino Montes Araujo</span>{" "}
            <Trans>all rights reserved</Trans>
          </h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  color: var(--clr-grey-10);
  background-color: var(--clr-grey-1);
  padding: 5rem 0;

  .logo-box {
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 7rem;
    height: auto;
  }

  .social-links {
    margin-top: 1rem;
  }
  .social-link {
    color: var(--clr-primary-7);
    :hover {
      color: var(--clr-grey-9);
    }
  }

  .footer-bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 20%;
    > * {
      flex: 1;
    }
  }

  .navigation {
    border-top: 1px solid var(--clr-grey-10);
    padding-top: 1rem;
    display: inline-block;
    margin-left: 5%;
    text-align: center;
  }

  .footer__item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  .link {
    color: var(--clr-grey-10);
    background-color: var(--clr-grey-1);
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.2s;
    :hover {
      color: var(--clr-primary-5);
      transform: rotate(-5deg) scale(1.3);
    }
  }

  .copy {
    border-top: 1px solid var(--clr-grey-10);
    padding-top: 1rem;
    margin-right: 5%;
  }
`;
