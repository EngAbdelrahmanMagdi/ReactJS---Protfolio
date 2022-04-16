import React from "react";
import TopContainer from "./topContainer";
import AboutMe from "./aboutMe";
import styled from "styled-components";
import Skills from "./skills";
import Protfolio from "./protfolio";
import FooterContainer from "./footerContainer";

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;


export default function HomePage() {
  return (
    <HomePageContainer>
        <TopContainer />
        <AboutMe/>
        <Skills/>
        <Protfolio/>
        <FooterContainer/>
    </HomePageContainer>
  );
}