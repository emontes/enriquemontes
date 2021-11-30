import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
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
    </>
  )
}

export default contact
