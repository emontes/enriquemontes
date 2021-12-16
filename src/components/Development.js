import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { Link } from "gatsby-plugin-react-i18next";

const Project = ({
  created,
  description,
  title,
  github,
  stack,
  url,
  image,
  slug,
}) => {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image.localFile)}
        className="project-img"
        alt={title}
      />
      <div className="project-info">
        <span className="project-number">{created}</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.index}>{item.title}</span>;
          })}
        </div>
        <div className="project-links">
          {github && (
            <a href={github}>
              <FaGithubSquare className="project-icon" />
            </a>
          )}

          <a href={url} className="project-links">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
