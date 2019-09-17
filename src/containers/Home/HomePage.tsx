import * as React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Wrapper>
      <h1>This is Home</h1>
      <Container>
        <NameWrapper>React</NameWrapper>
        <DetailWrapper>React is the best thing in the world</DetailWrapper>
        <InfoWrapper>All the info on React</InfoWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
const NameWrapper = styled.div`
  display: flex;
  border-bottom: solid 1px #ddd;
  padding-bottom: 15px;
  margin-bottom: 15px;
  h3 {
    font-size: 18px;
  }
`;

const DetailWrapper = styled.div`
  border-bottom: solid 1px #ddd;
  padding: 15px;
  margin-bottom: 15px;
`;

const InfoWrapper = styled.div`
  display: flex;
  border-bottom: solid 1px #ddd;
  padding-bottom: 15px;
  margin-bottom: 15px;
  img {
    margin-right: 15px;
    border: solid 1px #ddd;
    border-radius: 5px;
    padding: 3px;
  }
  h4 {
    font-size: 14px;
    line-height: 18px;
    margin-top: 15px;
    padding-right: 10px;
  }
`;

export default HomePage;
