import React from "react";
import Title from "../components/Title";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const About = ({ title, info, stack }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="row">
          <article className="col-1-of-2">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
          <div className="col-1-of-2">
            <div className="composition">
              <StaticImage
                src="../assets/images/pages/about-1.jpeg"
                alt={title}
                className="composition__photo composition__photo--p1"
              />
              <StaticImage
                src="../assets/images/pages/about-2.jpeg"
                alt={title}
                className="composition__photo composition__photo--p2"
              />
              <StaticImage
                src="../assets/images/pages/about-3.jpeg"
                alt={title}
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
  padding: 7rem 0;

  .about-text .section-title {
    margin-bottom: 2rem;
    text-align: justify;
  }
  .about-text .underline {
  }
  .about-text p {
    line-height: 2;
  }

  .composition {
    position: relative;

    &__photo {
      width: 300px;
      box-shadow: 0 1.5rem 4rem rgba(0, 37, 92, 0.4);
      border-radius: 2px;
      position: absolute;
      z-index: 10;
      transition: all 0.2s;
      outline-offset: 0.2rem;
      &--p1 {
        left: 0;
        top: -2rem;
      }
      &--p2 {
        right: 0;
        top: 2rem;
      }
      &--p3 {
        left: 20%;
        top: 10rem;
      }
      &:hover {
        outline: 0.5rem solid var(--clr-primary-5);
        transform: scale(1.05) translateY(-0.5rem);
        box-shadow: 0 2.5rem 4rem rgba(0, 37, 92, 0.5);
        z-index: 20;
      }
    }
  }
  .composition:hover .composition__photo:not(:hover) {
    transform: scale(0.9);
  }
`;
