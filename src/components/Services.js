import React from "react";
import services from "../constants/services";
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import device from "../assets/themes/device";
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
        <div className="services">
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

  .services {
    padding: 0 2rem;

    @media ${device.tablet} {
      display: flex;
      gap: 3rem;
      justify-content: center;
      align-items: stretch;
      > * {
        flex: 1;
      }
    }
  }
  .service {
    :not(:last-child) {
      margin-bottom: 2rem;
    }

    background: var(--clr-white-transparency-8);
    padding: 1.8rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: var(--clr-grey-5);
    box-shadow: var(--light-shadow);
    @media ${device.tablet} {
      :not(:last-child) {
        margin-bottom: 0rem;
      }
    }
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

      font-size: 1.6rem;
    }
  }
  .service-icon {
    font-size: 4rem;
    margin-bottom: 0;
    display: inline-block;
    color: var(--clr-primary-6);
  }
`;
