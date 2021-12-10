import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";

import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next";

const query = graphql`
  query {
    allStrapiJob(sort: { fields: created_at, order: DESC }) {
      nodes {
        position
        company
        date
        locale
        desc {
          id
          name
        }
      }
    }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiJob: { nodes: jobs },
  } = data;
  const [value, setValue] = React.useState(0);
  const { company, position, date, desc } = jobs[value];
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <section className="section jobs">
      <Title title={t("Experience")} />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            {
              if (item.locale == language) {
                return (
                  <button
                    key={index}
                    className={
                      index === value ? "job-btn active-btn" : "job-btn"
                    }
                    onClick={() => setValue(index)}
                  >
                    {item.company}
                  </button>
                );
              }
            }
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>

      <Link to="/about" className="btn center-btn">
        <Trans>more info</Trans>
      </Link>
    </section>
  );
};

export default Jobs;
