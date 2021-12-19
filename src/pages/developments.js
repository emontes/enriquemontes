import React from "react";
import { graphql } from "gatsby";

import Projects from "../components/Developments";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Hero from "../components/Hero";
import bcgImage from "../assets/images/pages/developments.jpg";

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("Developed Web Systems")}
        description={t("Developed Web Systems Description")}
      />
      <Hero
        bgColor="var(--clr-grey-10)"
        image={bcgImage}
        main={t("developments")}
        sub={t("That I have made or colaborated")}
        btnLink="contact"
      />
      <main>
        <section className="developments-page">
          <Projects
            title={t("Developed Web Systems")}
            projects={projects}
            allProjects
          />
        </section>
      </main>
    </Layout>
  );
};

export default ProjectsPage;

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
      filter: { locale: { eq: $language } }
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
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        recursos {
          id
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 40)
              }
            }
          }
        }
      }
    }
  }
`;
