import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import About from "../components/About";
import Jobs from "../components/Jobs";
import Hero from "../components/Hero";

const AboutPage = ({ data }) => {
  const {
    strapiAbout: { title, image, info, stack },
  } = data;
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("About")} />
      <Hero
        bgColor="var(--clr-grey-10)"
        main={t("Front-end programmer")}
        sub={t("in cancun since")}
        btnLink="contact"
      />
      <About title={title} image={image} info={info} stack={stack} />
      <Jobs jobs={data.allStrapiJob.nodes} />
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

    strapiAbout(locale: { eq: $language }) {
      title
      info
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }

    allStrapiJob(
      sort: { fields: date, order: DESC }
      filter: { locale: { eq: $language } }
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
  }
`;

export default AboutPage;
