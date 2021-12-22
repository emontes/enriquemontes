import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import About from "../components/About";
import Jobs from "../components/Jobs";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const AboutPage = ({ data }) => {
  const {
    strapiAbout: { title, info, stack },
  } = data;

  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        title={t("aboutTheProgrammer")}
        description={t("aboutPageDescription")}
        image={data.image.publicURL}
      />
      <Hero
        bgColor="var(--clr-grey-10)"
        main={t("Front-end programmer")}
        sub={t("in cancun since")}
        btnLink="contact"
        image={data.image.childImageSharp}
      />
      <About title={title} info={info} stack={stack} />
      <Jobs jobs={data.allStrapiJob.nodes} />
      <Testimonials />
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

    image: file(relativePath: { eq: "pages/about.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
      publicURL
    }
  }
`;

export default AboutPage;
