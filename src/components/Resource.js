import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

const Resource = ({ title, url, used, image, recurso_tipo }) => {
  const tipo = recurso_tipo ? recurso_tipo.title : "";

  return (
    <Wrapper>
      <div className="side side--front">
        <div className="img-container">
          <GatsbyImage
            image={getImage(image.localFile)}
            alt={title}
            className="img"
          />
        </div>
        <div className="footer">
          <div className="text">
            <h3>{title}</h3>
            <p>
              <Trans>Used since</Trans> {used}
            </p>
          </div>
        </div>
      </div>
      <div className="side side--back">
        <div className="cta">
          <div className="tipo">{tipo}</div>

          <a
            href={url}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Trans>view</Trans>{" "}
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Resource;

const Wrapper = styled.article`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 17rem;

  :hover .side--front {
    transform: rotateY(180deg);
  }
  :hover .side--back {
    transform: rotateY(0deg);
  }
  .side {
    transition: var(--transition);
    height: 17rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: var(--dark-shadow);

    &--front {
      background: var(--clr-white);
    }
    &--back {
      transform: rotateY(180deg);

      background-image: linear-gradient(
        to right bottom,
        var(--clr-primary-9),
        var(--clr-primary-3)
      );
    }

    /* FRONT SIDE STYLING */
    .img-container {
      position: relative;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
    .footer {
      padding: 1.1rem 1rem 1.3rem 1rem;
      text-align: left;
      background: var(--clr-white);
      height: 8rem;
    }

    /*  BACK SIDE STYLING */
    .cta {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      text-align: center;
    }

    .tipo {
      color: var(--clr-white);
      margin-bottom: 3rem;
    }

    .link {
      text-transform: uppercase;
      letter-spacing: var(--spacing);
      color: var(--clr-white);
      border: 2px solid var(--clr-white);
      padding: 0.5rem 0.7rem;
      display: inline-block;
      transition: var(--transition);
      cursor: pointer;
    }
    .link:hover {
      background: var(--clr-white);
      color: var(--clr-primary-5);
    }
  }

  @media screen and (min-width: 576px) {
    h3 {
      font-size: 0.8rem;
    }
    p {
      display: unset;
    }
  }
  @media screen and (min-width: 1200px) {
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
