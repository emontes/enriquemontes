import React from "react";

class ContactForm extends React.Component {
  render() {
    const { handleChange, handleSubmit, state } = this.props;
    return (
      <form onSubmit={handleSubmit} className="forma">
        <div className="form-group">
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            defaultValue={state.values.email}
            required
            className="form-control"
          />
          <input
            name="firstname"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            defaultValue={state.values.firstname}
            required
            className="form-control"
          />
          <input
            name="lastname"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            defaultValue={state.values.lastname}
            required
            className="form-control"
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            onChange={handleChange}
            defaultValue={state.values.phone}
            className="form-control"
          />
          <input
            name="movilephone"
            type="text"
            placeholder="Movile Phone"
            onChange={handleChange}
            defaultValue={state.values.movilephone}
            required
            className="form-control"
          />
          <input
            name="country"
            type="text"
            placeholder="Country"
            onChange={handleChange}
            defaultValue={state.values.country}
            required
            className="form-control"
          />
          <input
            name="state"
            type="text"
            placeholder="state"
            onChange={handleChange}
            defaultValue={state.values.state}
            required
            className="form-control"
          />
          <input
            name="city"
            type="text"
            placeholder="City"
            onChange={handleChange}
            defaultValue={state.values.city}
            required
            className="form-control"
          />

          <textarea
            name="comment"
            type="textarea"
            placeholder="How can I help you?"
            multiline
            rows="3"
            onChange={handleChange}
            defaultValue={state.values.comment}
            required
            className="form-control"
          />
          <button
            type="submit"
            disabled={state.fueEnviado || state.estaEnviando}
            variant="outlined"
            size="large"
            color="primary"
            className="submit-btn"
          >
            {state.fueEnviado
              ? "Gracias por contactarme."
              : state.estaEnviando
              ? "Enviando....."
              : "Enviar"}
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
