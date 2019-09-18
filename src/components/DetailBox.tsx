import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Icon, message, Row, Spin } from "antd";

type Props = {
  repoEndpoint: string;
};
const DetailBox: FC<Props> = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null as any);
  const [repoData, setRepoData] = useState<Repository>();
  const fetchData = async (repoEndpoint: string): Promise<any> => {
    setLoading(true);
    try {
      const { data } = await axios.get(repoEndpoint);
      if (data) {
        setRepoData(data);
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(props.repoEndpoint);
  }, [props.repoEndpoint]);
  console.log(repoData);
  return (
    <Wrapper>
      <Container>
        <Spin spinning={loading} />
        {error && message.error(error.message)}
        <Row>
          {repoData && (
            <NameWrapper>
              <h3>{repoData.name.toUpperCase()}</h3>
            </NameWrapper>
          )}
        </Row>
        <Row>
          <InfoWrapper>
            <Col span={4}>
              {repoData && (
                <img
                  style={{ height: 150, width: 150, objectFit: "contain" }}
                  src={repoData.owner.avatar_url}
                  alt={repoData.description}
                />
              )}
            </Col>
            <Col span={20}>
              {repoData && (
                <NameWrapper>
                  <h3>{repoData.name.toUpperCase()}</h3>
                </NameWrapper>
              )}
              <Row>
                <span>{repoData && repoData.description}</span>
              </Row>
            </Col>
          </InfoWrapper>
        </Row>
        <Row>
          <CountWrapper>
            <InfoBox>
              <h4>Forks Count</h4>
              {repoData && repoData.forks_count}
            </InfoBox>
            <InfoBox>
              <h4>Star Count</h4>
              {repoData && repoData.stargazers_count}
              <Icon type="star" theme="filled" style={{ color: "#3849" }} />
            </InfoBox>
            <InfoBox>
              <h4>Open Issues Count</h4>
              {repoData && repoData.open_issues_count}
            </InfoBox>
            <InfoBox>
              <h4>Pull Requests (WIP)</h4>
            </InfoBox>
          </CountWrapper>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: solid 1px #ddd;
  padding: 10px;
  margin-bottom: 15px;
`;

const Container = styled.div`
  margin-bottom: 20px;
  border: solid 1px #8364;
`;

const NameWrapper = styled.div`
  border-bottom: solid 1px #ddd;
  padding: 15px;
  h3 {
    font-size: 18px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  img {
    margin-right: 15px;
    border: solid 1px #ddd;
    border-radius: 5px;
    padding: 5px;
  }
  h4 {
    font-size: 14px;
    line-height: 18px;
    margin-top: 15px;
    padding-right: 10px;
  }
`;

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const InfoBox = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
`;

export default DetailBox;
