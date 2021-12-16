import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Title from "./Title";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Resource from "./Resource";

const Resources = ({ recursos, showLink }) => {
  const { t } = useTranslation();

  console.log("-----> recursos", recursos);
  return (
    <Wrapper className="section">
      <Title title={t("Technological resources that I use")} />
      <div className="center">
        {recursos.map((item) => {
          return <Resource key={item.id} {...item} />;
        })}
      </div>
      {showLink && (
        <Link to="/resources" className="btn center-btn">
          <Trans>See more Resources</Trans>
        </Link>
      )}
    </Wrapper>
  );
};

export default Resources;

const Wrapper = styled.section`
  padding: 6rem 0;
  text-align: center;
  background: var(--clr-primary-9);

  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5.5rem, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(auto-fill, minmax(7.04rem, 1fr));
    }
    @media screen and (min-width: 1200px) {
      width: 100%;
      max-width: 1170px;
      grid-template-columns: repeat(auto-fill, minmax(9.04rem, 1fr));
    }
  }
`;
