import React from "react";
import styled from "styled-components";
import AmanLogo from "../../../src/Assets/AmanAcademyLogo.png"
import "./style.css"
const MainDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.9) !important;
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  padding: 20px 0;
  z-index: 9;
  @media screen and (max-width: 1025px) {
    height: 40px;
    padding: 10px;
  }
`;
const SecondDiv = styled.div`
  display: flex;
  align-items: center;

`;
const SecondMob = styled.div`
  display: none;
  @media screen and (max-width: 676px) {
    display: block;
  }
`;
const Logo = styled.div`
  color: #dd3333;
  font-size: 28px;
  font-weight: 500;
  @media screen and (max-width: 1025px) {
    font-size: 18px;
    font-weight: 400;
  }
`;
const H3 = styled.div`
  color: #1e73be;
  font-size: 12px;
`;
const H2 = styled.h2`
  padding: 0 7px;
  font-size: 16px;
  font-weight: 500;
  color: #1e73be;
  @media screen and (max-width: 1025px) {
    font-size: 12px;
    font-weight: 400;
    display: none;
  }
`;
const ImgLogo = styled.img`
width: 80px;
margin-left: -120px;
margin-right: 30px;
@media screen and (max-width: 767px) {
width: 40px;
width: 40px;
margin: 0 5px 0 0;
}
`;
const FirstDiv = styled.div`
display: flex;
`;
const FirstChildDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const SideBar = styled.div`
@media screen and (max-width: 767px) {
  margin-top:55px;
  text-align: center;
cursor: pointer;
height: 100vh;
width: 150px;
background-color: skyblue;
position: absolute;
right: 0;
transition: all 1s ease;
}
`;
const H4 = styled.h3`
/* color: #fff; */
font-size: 14px;
font-weight: 500;
`;
export default function Header() {

  const [open,setOpen] = React.useState(true)
    const handleOpen=()=>{
        setOpen(!open)
    }
  return (
 <>
    <MainDiv>
     
     <FirstDiv>
       <ImgLogo src={AmanLogo}/>
      <FirstChildDiv>
      <Logo>Aman Academy</Logo>
       <H3>PO- Loam, Darbhanga, Bihar 847115</H3>
       </FirstChildDiv>
     </FirstDiv>
     
     <SecondMob>
     <div className="nav-links-menu" onClick={handleOpen}>
           <span className={open?'line1':'line1-active'}></span>
           <span className={open?'line2':'line2-active'}></span>
           <span className={open?'line3':'line3-active'}></span>
       </div></SecondMob>
     <SecondDiv>
       <H2>Home</H2>
       <H2>About Us</H2>
       <H2>Admission</H2>
       <H2>Facilities</H2>
       <H2>Career</H2>
       <H2>Download</H2>
       <H2>Contact Us</H2>
     </SecondDiv>

     {/* <<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>></> */}
    
   </MainDiv>
    <SideBar className={open? "sideBar" : "sideBarOpen"} >
    <H4>Home</H4>
      <H4>About Us</H4>
      <H4>Admission</H4>
      <H4>Facilities</H4>
      <H4>Career</H4>
      <H4>Download</H4>
      <H4>Contact Us</H4>
    </SideBar>
 </>
  );
}
