import React from 'react'
import Header from '../../Components/Header/Header'
import styled from 'styled-components';
import Banner from '../Banner/Banner';
import BodyComponent from '../BodyComponent/BodyComponent';
import Footer from '../../Components/Footer/Footer';
const MainDiv = styled.div`
/* background-color: red; */
/* height: 120vh; */
`;
export default function Home() {
  return (
    <MainDiv>
      <Header/>
      <Banner/>
      <BodyComponent/>
      <Footer/>
    </MainDiv>
  )
}
