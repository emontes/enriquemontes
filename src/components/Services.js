import React from "react";
import Title from "./Title";
import services from "../constants/services";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="section bg-grey">
      <Title title={t("services")} />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="service">
              {icon}
              <h4>{t(title)}</h4>
              <div className="underline"></div>
              <p>{t(text)}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
