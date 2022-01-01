import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Resource from "./Resource";

const Resources = ({ recursos, showLink }) => {
  const { t } = useTranslation();
  const paddingSec = showLink ? "16rem 0 10rem" : "6rem 0 2rem";

  return (
    <Wrapper style={{ padding: `${paddingSec}` }}>
      <Title title={t("I know how to use the following technologies")} />
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
      {!showLink && <Title title={t("Technological resources that I use")} />}
    </Wrapper>
  );
};

export default Resources;

const Wrapper = styled.section`
  text-align: center;
  background: var(--clr-primary-9);

  .center {
    padding: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    > * {
      flex: 1;
    }
    gap: 2rem;
  }
`;
