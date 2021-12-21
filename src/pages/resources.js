import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Resources from "../components/Resources";
import Hero from "../components/Hero";

const ResourcesPage = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("Technological resources that I use")}
        description={t("ResourcesDescription")}
        image={data.image.publicURL}
      />
      <Hero
        bgColor="var(--clr-primary-9)"
        main={t("Technological resources")}
        sub={t("The Resources I Use (or have used)")}
        btnLink="contact"
        image={data.image.childImageSharp}
      />
      <main>
        <section className="developments-page">
          <Resources recursos={data.recursos.nodes} />
        </section>
      </main>
    </Layout>
  );
};

export default ResourcesPage;

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

    recursos: allStrapiRecurso(sort: { fields: used, order: DESC }) {
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

    image: file(relativePath: { eq: "projects-4.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
      publicURL
    }
  }
`;
