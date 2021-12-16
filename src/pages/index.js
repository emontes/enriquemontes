import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Developments from "../components/Developments";
import Seo from "../components/Seo";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import Resources from "../components/Resources";

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data;
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("Programmer in Cancun")}
        description={t("index-description")}
      />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Resources recursos={data.recursos.nodes} showLink />
        <Developments
          title={t("featured projects")}
          showLink
          projects={projects}
        />
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
      sort: { fields: created, order: DESC }
    ) {
      nodes {
        created(formatString: "MMM yyyy")
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

    recursos: allStrapiRecurso(
      sort: { fields: used, order: DESC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        slug
        url
        used(formatString: "YYYY")
        recurso_tipo {
          title
          slug
          url
          locale
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
