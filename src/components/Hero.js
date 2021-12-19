import React from "react";
import BackImage from "../assets/images/pages/about.jpg";
import styled from "styled-components";
import { Trans, Link } from "gatsby-plugin-react-i18next";

const AboutHeader = ({ bgColor, image, main, sub, btnLink, btnText }) => {
  return (
    <Wrapper style={{ backgroundColor: `${bgColor || "var(--clr-white)"}` }}>
      <div
        className="header"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgb(0, 89, 153,0.8), rgb(199, 226, 222,0.8)), url(${
            image || BackImage
          })`,
          backgroundColor: "var(--clr-primary-8)",
        }}
      >
        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">
              {main || "Programador Front-end"}
            </span>
            <span class="heading-primary--sub">
              {sub || "en Cancún desde 2002, programando desde 1984"}
            </span>
          </h1>

          {btnLink && (
            <Link to={`/${btnLink}`} class="btn btn--white btn--animated">
              <Trans>{btnText || "contact"}</Trans>
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutHeader;

const Wrapper = styled.header`
  .header {
    height: 89vh;
    background-size: cover;
    background-position: top;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    position: relative;
  }

  .header__text-box {
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .heading-primary {
    color: var(--clr-primary-10);
    text-shadow: 1px 1px 2px black;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 6rem;
    &--main {
      display: block;
      font-size: 4rem;
      font-weight: 400;
      letter-spacing: 0.5rem;
      animation-name: moveInLeft;
      animation-duration: 1s;
      animation-timing-function: ease-out;

      /* animation-iteration-count: 3;
      animation-delay: 3s; */
    }
    &--sub {
      margin-top: 2rem;
      display: block;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.4rem;
      animation: moveInRight 1s ease-out;
    }
  }
`;
