import React from 'react';
import styled from 'styled-components';
import BannerImg from "../../Assets/Home1st.jpeg"
const MainDiv = styled.div`

`;
const ImgBanner = styled.img`
width: 100%;
@media screen and (max-width: 767px){
  margin-top: 25px;
}
`;
export default function Banner() {
  return (
    <MainDiv>
      <ImgBanner src={BannerImg}/>
          </MainDiv>
  )
}
