import React from "react";
import { graphql } from "gatsby";

import Projects from "../components/Developments";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const ProjectsPage = ({ data }) => {
  const projects = data.allStrapiProject.nodes;

  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("Developed Web Systems")}
        description={t("Developed Web Systems Description")}
        image={data.image.publicURL}
      />
      <Hero
        bgColor="var(--clr-grey-10)"
        image={data.image.childImageSharp}
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
        <Testimonials />
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

    image: file(relativePath: { eq: "pages/developments.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
      publicURL
    }
  }
`;
