import React, { Component } from "react";
import axios from "axios";
import Form from "./ContactForm";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        firstname: "",
        lastname: "",
        phone: "",
        mobilephone: "",
        country: "",
        city: "",
        state: "",
        comment: "",
      },
      estaEnviando: false,
      esError: false,
      fueEnviado: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    //Preparamos envío a Hubspot
    const qs = require("querystring");

    const postData = qs.stringify({
      email: this.state.values.email,
      firstname: this.state.values.firstname,
      lastname: this.state.values.lastname,
      phone: this.state.values.phone,
      mobilephone: this.state.values.mobilephone,
      country: this.state.values.country,
      city: this.state.values.city,
      state: this.state.values.state,
      how_can_we_help: this.state.values.comment,

      hs_context: JSON.stringify({
        pageUrl: "https://enriquemontes.com/contacto",
        pageName: "Mensaje desde EnriqueMontes.com",
      }),
    });

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      //"Access-Control-Allow-Origin": "*",
      "Content-Length": postData.length,
    };

    // La documentacion para enviar formas a hubspot esta en:
    // https://developers.hubspot.com/docs/methods/forms/submit_form

    this.setState({ estaEnviando: true });
    /** Envío a Hubspot */
    axios
      .post(
        "https://forms.hubspot.com/uploads/form/v2/6942869/2ef78e0f-1292-4446-8941-1ad37f7839dc",
        postData,
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log("--- desde forma de De DateForm Áxio---");

        console.log(res);
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    this.setState({ estaEnviando: false });
    this.setState({ fueEnviado: true });
  };

  handleChange = (e) => {
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <section className="contact-page">
        <article className="contact-form">
          <h3>contact me</h3>
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            state={this.state}
          />
        </article>
      </section>
    );
  }
}

export default Contact;
