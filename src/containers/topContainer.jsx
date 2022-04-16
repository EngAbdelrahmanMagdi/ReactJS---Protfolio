import React from "react";
import BackGroundImg from "./../assets/image1.jpg";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";
import FontIcon from "../components/fonticon";
import Themes from "../themes";
import Button from "../components/button";

const TopSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  display:flex;
  background-image: url(${BackGroundImg});
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Header1 = styled.h1`
    position: absolute;
    top: 10%;
    left: 8%;
    color:white;
    font-family:Arial;
    margin: 20px;
    font-size: 300%;

`

const Header3 = styled.h3`
    position: absolute;
    top: 30%;
    left: 10%;
    color:white;
    font-family: Georgia, serif;
    margin: 20px;

`

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;


const ScrollToNextSection = () => {
    scroller.scrollTo("AboutUsSection", { smooth: true, duration: 1500 });
};
export default function TopContainer(props) {
    return (
        <Element>
            <TopSection>
                <Header1>Abdelrahman Magdy </Header1>
                <Header3>Web Developer& Designer </Header3>
                
            </TopSection>
            <Button bgColor={`${Themes.black}`}>Contact Me</Button>
            <ArrowContainer>
            <FontIcon onClick={ScrollToNextSection} />
          </ArrowContainer>
        </Element>




    );
}
