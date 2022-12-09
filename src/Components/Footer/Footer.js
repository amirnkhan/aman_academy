import React from "react";
import styled from "styled-components";
import Logo from "../../../src/Assets/AmanAcademyLogo.png";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px;
  /* height: 200px; */
  background-color: skyblue;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const FirstDiv = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const SecondDiv = styled.div`
  @media screen and (max-width: 767px) {
    margin: 10px 0;
  }
`;
const CopyRightDiv = styled.div`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  background-color: skyblue;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 0 10px 10px 10px;
  }
`;
const ImgLogo = styled.img`
  width: 120px;
  @media screen and (max-width: 767px) {
    width: 80px;
  }
`;
const FirstParent = styled.div`
display: flex;
    justify-content: space-around;
    padding-bottom: 40px;
    @media screen and (max-width: 767px) {
flex-direction: column;  }

`;

export default function Footer() {
  return (
    <>
      <MainDiv>
        <FirstParent>
        <FirstDiv>
          <div>
            <ImgLogo src={Logo} />
          </div>
          <div>
            AMAN ACADEMY SCHOOL
            <br />
            Loam, Darbhanga, Bihar 847115
            <br />
            Ph: +919102846803
            <br />
            +917004750276 & +9189549 57699
          </div>
        </FirstDiv>
        
        <SecondDiv>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.247250663836!2d85.99437891434994!3d26.221154595831308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edc8df3509dedd%3A0x64595ceee9d77f45!2sAman%20Academy!5e0!3m2!1sen!2sin!4v1669574028236!5m2!1sen!2sin"
            style={{
              maxWidth: "400px",
              height: "200px",
              outline: "none",
              border: "none",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </SecondDiv>
        </FirstParent>
        <CopyRightDiv>
        © Copyright 2022 All rights reserved by, Aman Academy School, Bihar
      </CopyRightDiv>
      </MainDiv>
      
    </>
  );
}
