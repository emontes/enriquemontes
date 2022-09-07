import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  if (!data.strapiProject) {
    console.log('----> No hay data.strapiProject')
    return null
  }
  return (
    <Layout>
      <Seo
        title={data.strapiProject.title.toUpperCase()}
        description={data.strapiProject.description}
        image={data.strapiProject.image.localFile.publicURL}
      />
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
        <br />
        <a href={data.strapiProject.url}>
          <img src={data.strapiProject.image.localFile.publicURL} alt={title} />
        </a>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProject($slug: String, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    strapiProject(slug: { eq: $slug }, locale: { eq: $language }) {
      description
      title
      url
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`
export default ProjectTemplate
