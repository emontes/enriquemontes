import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Contact from "../components/Contact";

const ContactPage = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("Contact")} description={t("contact-description")} />
      <Contact />
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

export default ContactPage;
