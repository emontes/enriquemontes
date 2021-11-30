import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="404" />
      <main className="error-page">
        <div className="error-container">
          <h1>ups, callejón sin salida</h1>
          <Link to="/" className="btn">
            Regresar a Home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
