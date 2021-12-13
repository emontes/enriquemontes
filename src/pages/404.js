import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { Link, Trans } from "gatsby-plugin-react-i18next";

const Error = () => {
  return (
    <Layout>
      <Seo title="404" />
      <main className="error-page">
        <div className="error-container">
          <h1>
            <Trans>ups, dead end</Trans>
          </h1>
          <Link to="/" className="btn">
            <Trans>back to home</Trans>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;

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
