import React from "react";
import socialLinks from "../constants/social_links";
import { Trans } from "gatsby-plugin-react-i18next";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <div className="footer-links social-links">
          {socialLinks.map((link) => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            );
          })}
        </div>
        <h4>
          <Trans>copyright</Trans> &copy; {new Date().getFullYear()}{" "}
          <span>Enrique Adelino Montes Araujo</span>{" "}
          <Trans>all rights reserved</Trans>
        </h4>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;
  color: var(--clr-white);

  h4 {
    margin-top: 0.5rem;
    font-weight: normal;
  }
`;
