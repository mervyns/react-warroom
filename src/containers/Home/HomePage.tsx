import DetailBox from "../../components/DetailBox";
import React from "react";
import styled from "styled-components";
import { REPO_URLS } from "../../constants/CONSTANTS";
import { Row } from "antd";

const HomePage = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <h1>React War Room</h1>
        </Row>
        <Row>
          {REPO_URLS.map((endpoint: string) => {
            return <DetailBox repoEndpoint={endpoint} />;
          })}
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: solid 1px #ddd;
  padding: 15px;
  margin-bottom: 15px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  flex-direction: column;
`;

export default HomePage;
