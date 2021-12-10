import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Seo from "../components/Seo";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data;
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("Home")} />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title={t("featured projects")} showLink projects={projects} />
      </main>
    </Layout>
  );
};

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

    allStrapiProject(
      filter: { featured: { eq: true }, locale: { eq: $language } }
      limit: 3
    ) {
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

export default IndexPage;
