import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const MainDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

const Heading = styled.h1`
  color: #03711e;
  font-weight: 600;
  font-size: 39px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    font-size: 28px;
    text-align: center;
  }
`;
const Heading2 = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  margin: 0;
`;
const Div1 = styled.div`
  box-shadow: 0px 4px 10px 0px rgb(0 0 0 / 50%);
`;
const Heading3 = styled.h2`
  color: #00abf4;
  font-size: 23px;
  font-weight: 800;
  padding: 10px 0;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    font-weight: 600;
  }
`;
export default function BodyComponent() {
  return (
    <MainDiv>
      <Heading>WELCOME TO AMAN ACADEMY SCHOOL</Heading>
      <Heading2>Affiliated to CBSE, Delhi,</Heading2>
      <Div1>
        <a href="https://drive.google.com/file/d/1d8sX4FsJzUSW48PvpV1-B4MdvzmiJwyD/view?usp=share_link" target="_blank" style={{textDecoration:"none"}}>
          <Heading3>PUBLIC DISCLOSURE</Heading3>
        </a>
      </Div1>
      <Cards />
    </MainDiv>
  );
}
