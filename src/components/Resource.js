import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

const Resource = ({ title, url, used, image, recurso_tipo }) => {
  const tipo = recurso_tipo ? recurso_tipo.title : "";

  return (
    <Wrapper>
      <div className="img-container">
        <GatsbyImage
          image={getImage(image.localFile)}
          alt={title}
          className="img"
        />
        <a
          href={url}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans>view</Trans>{" "}
        </a>
      </div>
      <div className="footer">
        <div className="text">
          <h3>{title}</h3>
          <p>
            {tipo},{used}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Resource;

const Wrapper = styled.article`
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  background: var(--clr-white);

  &:hover {
    box-shadow: var(--dark-shadow);
  }
  h3 {
    font-size: 1rem;
  }

  .img-container {
    position: relative;
    background: var(--clr-primary-5);
    transition: var(--transition);
  }
  .img {
    transition: var(--transition);
  }
  .img-container:hover .img {
    opacity: 0.3;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
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
  .img-container:hover .link {
    opacity: 1;
  }

  .footer {
    padding: 1.1rem 1rem 1.3rem 1rem;
    text-align: left;
    background: var(--clr-white);
    height: 6rem;
  }

  h3 {
    text-transform: capitalize;
    font-size: 0.7rem;
    margin-bottom: 0;
  }

  p {
    display: none;
    font-size: 0.5rem;
    color: var(--clr-primary-5);
    margin-bottom: 0;
    letter-spacing: var(--spacing);
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text {
    padding-top: 9px;
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
