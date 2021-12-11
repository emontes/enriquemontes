import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout>
      <Seo title="404" />
      <main className="error-page">
        <div className="error-container">
          <h1>ups, callejón sin salida</h1>
          <Link to="/" className="btn">
            Regresar a Home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
