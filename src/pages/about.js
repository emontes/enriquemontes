import React from "react";
import { graphql } from "gatsby";
import Title from "../components/Title";
import Seo from "../components/Seo";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import Jobs from "../components/Jobs";

const About = ({ data }) => {
  const {
    strapiAbout: { title, image, info, stack },
  } = data;
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("About")} />
      <section className="about-page">
        <div className="section-center about-center">
          <img
            src={image.localFile.publicURL}
            alt={title}
            className="about-img-svg"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
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

export default About;
