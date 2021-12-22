import React from "react";
import services from "../constants/services";
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/projects-3.jpg"
        alt="Services"
        placeholder="blurred"
        layout="constrained"
        className="bg-image"
      />
      <div className="hero-container">
        <div className="section-center services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                {icon}
                <h3>{t(title)}</h3>

                <p>{t(text)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  position: relative;

  margin-top: 5rem;
  margin-bottom: -9rem;

  height: 90vh;
  -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 9vh, 100% 0, 100% 78vh, 0 100%);

  .bg-image {
    height: 100vh;
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
      rgba(0, 89, 153, 0.8),
      rgba(199, 226, 222, 0.8)
    );
  }

  .service {
    margin-bottom: 1.5rem;
    background: var(--clr-white-transparency-8);
    padding: 0.8rem 1.2rem 0.1rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: var(--clr-grey-5);
    box-shadow: var(--light-shadow);
    :hover {
      background: var(--clr-primary-5);
      color: var(--clr-primary-9);
      transform: translateY(-1.5rem) scale(1.03);
      box-shadow: var(--dark-shadow);
      .service-icon {
        color: var(--clr-primary-9);
      }
    }
    :hover p {
      color: var(--clr-primary-9);
    }
    p {
      -webkit-transition: var(--transition);
      transition: var(--transition);
      color: var(--clr-grey-3);
      text-align: left;

      font-size: 0.9rem;
    }
  }
  .service-icon {
    font-size: 1.7rem;
    margin-bottom: 0;
    display: inline-block;
    color: var(--clr-primary-6);
  }

  h3 {
    font-size: 1rem;
  }

  @media screen and (min-width: 676px) {
    .service {
      padding: 2.5rem 1.5rem;
      p {
        margin-top: 1.2rem;
        letter-spacing: var(--spacing);
      }
    }
    .service-icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    h3 {
      font-size: 1.5rem;
    }
    .service-icon {
      font-size: 3.5rem;
    }
    .service {
      p {
        font-size: 1.2rem;
      }
    }
  }
`;
