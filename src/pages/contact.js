import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

const Contact = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("Contact")} />
      <section className="contact-page">
        <article className="contact-form">
          <h3>
            <Trans>contact me</Trans>
          </h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="nombre"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                placeholder="mensaje"
                rows="5"
                className="form-control"
              />
              <button type="submit" className="submit-btn btn">
                enviar mensaje
              </button>
            </div>
          </form>
        </article>
      </section>
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
  }
`;

export default Contact;
