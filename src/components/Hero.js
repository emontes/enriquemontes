import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Trans, Link } from 'gatsby-plugin-react-i18next'

const AboutHeader = ({ bgColor, image, main, sub, btnLink, btnText }) => {
  return (
    <Wrapper style={{ backgroundColor: `${bgColor || 'var(--clr-white)'}` }}>
      <div className="hero">
        <GatsbyImage
          image={getImage(image)}
          alt="Programador Gatsby"
          className="hero-img"
          placeholder="tracedSVG"
          layout="constrained"
        />
        <div className="hero-container">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">
                {main || 'Programador Front-end'}
              </span>
              <span className="heading-primary--sub">
                {sub || 'en Cancún desde 2002, programando desde 1984'}
              </span>
            </h1>

            {btnLink && (
              <Link to={`/${btnLink}`} className="btn btn--white btn--animated">
                <Trans>{btnText || 'contact'}</Trans>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutHeader

const Wrapper = styled.header`
  .hero-img {
    height: 100%;
    border-radius: var(--borderRadius);
  }
  .hero {
    height: 89vh;
    background-color: var(--clr-primary-9);
    background-size: cover;
    background-position: top;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    position: relative;
  }
  .hero-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
      to bottom right,
      rgba(0, 37, 92, 0.7),
      rgba(199, 226, 222, 0.9)
    );
    border-radius: var(--borderRadius);
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
      font-size: 3.2rem;
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
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: 0.4rem;
      animation: moveInRight 1s ease-out;
    }
  }
`
