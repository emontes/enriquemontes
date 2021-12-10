import React from "react";
// import { Link } from "gatsby";
import socialLinks from "../constants/social_links";
import { StaticImage } from "gatsby-plugin-image";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>
              <Trans>i'm enrique</Trans>
            </h1>
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
    </header>
  );
};

export default Hero;
