import React from "react";
import Title from "../components/Title";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import device from "../assets/themes/device";

const About = ({ title, info, stack }) => {
  return (
    <Wrapper>
      <article className="article">
        <Title title={title} />
        <p>{info}</p>
        <div className="about-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
      </article>
      <div className="images">
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
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 7rem 0;
  display: flex;

  align-items: center;
  flex-direction: column;
  gap: 3rem;

  @media ${device.laptopL} {
    flex-direction: row;
  }

  .article {
    flex: 2;
    padding: 2rem;
    text-algin: justify;
  }

  .images {
    position: relative;
    padding: 2rem;
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .about-text .section-title {
    margin-bottom: 2rem;
    text-align: justify;
  }

  .about-text p {
    line-height: 2;
  }

  .composition {
    width: 30rem;

    &__photo {
      width: 20rem;
      box-shadow: 0 1.5rem 4rem rgba(0, 37, 92, 0.4);
      border-radius: 2px;

      z-index: 10;
      transition: all 0.2s;
      outline-offset: 0.2rem;
      &--p1 {
        margin-left: 0;
        margin-top: 0rem;
      }
      &--p2 {
        margin-left: 10rem;
        margin-top: -10rem;
      }
      &--p3 {
        margin-left: 4rem;
        margin-top: -10rem;
      }
      &:hover {
        outline: 0.5rem solid var(--clr-primary-4);
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
