import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/HeroHome";
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
  console.log("---> Data", data);
  return (
    <Layout>
      <Seo
        title={t("Programmer in Cancun")}
        description={t("index-description")}
      />
      <main>
        <Hero />
        <Jobs jobs={data.allStrapiJob.nodes} showLink />
        <Services />

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

    allStrapiJob(
      sort: { fields: date, order: DESC }
      filter: { locale: { eq: $language } }
      limit: 5
    ) {
      nodes {
        position
        company
        date
        locale
        desc {
          id
          name
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
