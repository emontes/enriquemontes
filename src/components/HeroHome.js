import React from "react";
import socialLinks from "../constants/social_links";
import { StaticImage } from "gatsby-plugin-image";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>
              <Trans>i'm enrique</Trans>
            </h1>
            <h3>
              <Trans>Programmer in Cancun</Trans>
            </h3>
            <h4>
              <Trans>Front-end developer</Trans>
            </h4>
            <Link to="/contact" className="btn">
              <Trans>contact me</Trans>
            </Link>
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
        </article>
        <StaticImage
          src="../assets/images/mainBcg.jpg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.header`
  /* margin-top: -5rem; */
  /* padding-top: 5rem; */
  height: 89vh;
  background: var(--clr-primary-10);
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  .hero-center {
    height: 100%;
    display: grid;
    align-items: center;
  }

  .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  .hero-info {
    background: var(--clr-primary-10);
  }
  .hero-img {
    display: none;
  }
  .hero-img-svg {
    display: none;
  }
  .hero-img {
    display: none;
  }
  .hero-info h4 {
    color: var(--clr-grey-5);
  }
  .hero-icons {
    justify-items: flex-start;
  }
  .btn {
    margin-top: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 60%;
      right: 0;
      bottom: 0;
      background: var(--clr-white);
    }
    h4 {
      font-size: 0.85rem;
    }

    .hero-center {
      grid-template-columns: repeat(12, 1fr);
    }

    .hero-info {
      grid-row: 1/1;
      grid-column: 1 / span 8;
    }
    .hero-img {
      display: block;
      grid-row: 1/1;
      grid-column: 7/-1;
      border-radius: 2rem;
    }
    .hero-img::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
      opacity: 0.75;
      transition: var(--transition);
    }
    :hover .hero-img::after {
      opacity: 0.3;
      transition: var(--transition);
    }
    .hero-img-svg {
      width: 100%;
      position: relative;
      display: block;
      grid-row: 1/1;
      grid-column: 7/-1;
    }
  }
  @media screen and (min-width: 1170px) {
    h4 {
      font-size: 1rem;
      line-height: 1;
    }

    .hero-info {
      grid-column: 1 / span 8;
    }
  }
`;
