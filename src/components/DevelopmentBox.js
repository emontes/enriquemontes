import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { Link } from "gatsby-plugin-react-i18next";
import styled from "styled-components";

const Project = ({
  created,
  description,
  title,
  github,
  recursos,
  url,
  image,
  slug,
}) => {
  return (
    <Wrapper>
      <GatsbyImage
        image={getImage(image.localFile)}
        className="image"
        alt={title}
      />
      <div className="info">
        <div className="top-dates">
          <div className="project-number">{created}</div>
          <div className="links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithubSquare className="project-icon" />
              </a>
            )}

            <a
              href={url}
              className="project-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaShareSquare className="project-icon" />
            </a>
          </div>
        </div>

        <Link to={`/developments/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>

        <p className="project-desc">
          {description ? description.substring(0, 100) : ""}
        </p>

        <div className="resources">
          {recursos.map((recurso) => {
            return (
              <GatsbyImage
                key={recurso.id}
                image={getImage(recurso.image.localFile)}
                alt={recurso.title}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.article`
  background: var(--clr-white);
  margin-bottom: 4rem;

  box-shadow: var(--light-shadow);
  transition: var(--transition);
  background: var(--clr-white);

  &:hover {
    box-shadow: var(--dark-shadow);
  }

  &:hover .image::after {
    opacity: 0;
  }

  .image {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);

    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
      opacity: 0.85;
      transition: var(--transition);
    }
  }

  .top-dates {
    display: flex;
    justify-content: space-between;
  }

  .info {
    background: var(--clr-white);
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  .resources {
    display: flex;
    justify-content: space-around;
  }
`;
