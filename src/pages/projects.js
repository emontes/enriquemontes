import React from "react";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { useTranslation } from "gatsby-plugin-react-i18next";

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("Projects")} />
      <main>
        <section className="projects-page">
          <Projects title={t("all projects")} projects={projects} />
        </section>
      </main>
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    allStrapiProject(filter: { locale: { eq: $language } }) {
      nodes {
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
