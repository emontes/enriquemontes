import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Video from "../assets/video/typing.mp4";
import testimonialsData from "../constants/testimonials";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "testimonials" } }) {
      nodes {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

const Testimonials = () => {
  const files = useStaticQuery(query);
  const images = files.allFile.nodes;
  return (
    <Wrapper>
      <div className="bg-video">
        <video className="bg-video__content" loop autoPlay={"autopay"} muted>
          <source src={Video} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>

      {testimonialsData.map((item) => {
        const image = getImage(images[item.id]);
        return (
          <div className="story" key={item.id}>
            <figure className="story__shape">
              <GatsbyImage
                image={image}
                alt={item.name}
                className="story__img"
              />
              <figcaption className="story__caption">{item.name}</figcaption>
            </figure>
            <div className="story__text">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Testimonials;

const Wrapper = styled.section`
  position: relative;
  padding: 5rem 0 4rem;
  background-color: transparent;

  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.15;
    overflow: hidden;

    &__content {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .story {
    width: 75%;
    max-width: 50rem;
    margin: 0 auto 2rem;
    box-shadow: 0 2rem 4rem rgba(0, 37, 92, 0.1);
    background-color: rgba(241, 245, 248, 0.6);
    border-radius: 3px;
    padding: 1.5rem 2rem 2.3rem 3rem;

    color: var(--clr-grey-5);
    transform: skewX(-12deg);

    :hover {
      box-shadow: var(--dark-shadow);
      .story__img {
        transform: scale(1);
        filter: blur(3px) brightness(80%);
      }
      .story__caption {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }

    &__shape {
      width: 7rem;
      height: 7rem;

      float: left;
      -webkitshape-outside: circle(50% at 50% 50%);
      shape-outside: circle(50% at 50% 50%);

      -webkitclip-path: circle(50% at 50% 50%);
      clip-path: circle(50% at 50% 50%);
      overflow: hidden;
      transform: translateX(-1.2rem) skewX(12deg);
      position: relative;
    }

    &__img {
      height: 100%;
      transform: scale(1.2);
      backface-visibility: hidden;
      transition: all 0.3s;
    }

    &__text {
      transform: skewX(12deg);
    }

    &__caption {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 20%);
      color: var(--clr-white);
      text-transform: uppercase;
      font-size: 1rem;
      text-align: center;
      opacity: 0;
      transition: all 0.5s;
      backface-visibility: hidden;
    }
  }
`;
