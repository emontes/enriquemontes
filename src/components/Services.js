import React from "react";
import services from "../constants/services";
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import bgImage from "../assets/images/projects-3.jpg";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgb(0, 89, 153,0.8), rgb(199, 226, 222,0.8)), url(${bgImage})`,
        backgroundColor: "var(--clr-primary-5)",
      }}
    >
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
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  padding: 15rem 0;
  background-size: cover;
  transform: skewY(-7deg);
  margin-top: 5rem;
  margin-bottom: -6rem;

  & > * {
    transform: skewY(7deg);
  }

  .service {
    background: var(--clr-white-transparency-8);
    padding: 2.5rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: var(--clr-grey-5);
    :hover {
      background: var(--clr-primary-5);
      color: var(--clr-primary-9);
      transform: translateY(-1.5rem) scale(1.03);
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
      margin-top: 1.2rem;
      letter-spacing: var(--spacing);
    }
  }
  .service-icon {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    color: var(--clr-primary-6);
  }

  h3 {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 676px) {
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
