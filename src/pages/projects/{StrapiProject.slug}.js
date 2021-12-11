import React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";

const ProjectTemplate = ({ pageContext: { slug, title }, data }) => {
  return (
    <Layout>
      <Seo
        title={data.strapiProject.title.toUpperCase()}
        description={data.strapiProject.description}
        image={data.strapiProject.image.localFile.publicURL}
      />
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
        <br />
        <img src={data.strapiProject.image.localFile.publicURL} alt={title} />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleProject($slug: String) {
    strapiProject(slug: { eq: $slug }) {
      description
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`;
export default ProjectTemplate;
