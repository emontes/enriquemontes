import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

const languageName = {
  es: "Español",
  en: "English",
  ru: "русский",
  he: "עברית",
  de: "Deutsch",
};

const Language = () => {
  const { language, languages, changeLanguage } = useI18next();
  return (
    <div
      style={{
        textAlign: "right",
        padding: "0.5rem",
      }}
    >
      {languages.map((lng) => (
        <Link
          key={lng}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage(lng);
          }}
          style={{
            color:
              lng === language ? `var(--clr-primary-5)` : `var(--clr-grey-1`,
            margin: 10,
            textDecoration: `underline`,
            cursor: `pointer`,
          }}
        >
          {languageName[lng]}
        </Link>
      ))}
    </div>
  );
};

export default Language;
