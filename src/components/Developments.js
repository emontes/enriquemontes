import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Development from "./Development";
import DevelopmentBox from "./DevelopmentBox";
import { Link, Trans } from "gatsby-plugin-react-i18next";

const Developments = ({ projects, title, showLink, allProjects }) => {
  return (
    <Wrapper className="section">
      <Title title={title} />
      <div className={`section-center ${allProjects ? "section-grid" : ""}`}>
        {projects.map((project, index) => {
          if (allProjects) {
            return (
              <DevelopmentBox
                key={project.id}
                index={index}
                {...project}
                className="proyecto"
              />
            );
          }
          return (
            <Development
              key={project.id}
              index={index}
              {...project}
              className="proyecto"
            />
          );
        })}
      </div>
      {showLink && (
        <Link to="/developments" className="btn center-btn">
          <Trans>See more web developments</Trans>
        </Link>
      )}
    </Wrapper>
  );
};

export default Developments;

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .section-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
  }
`;
