import React from "react";
import Themes from "../../themes";
import styled from "styled-components";

const ButtonContainer = styled.button`
position: absolute;
transform: translateX(-50%);
height:100px; 
width:150px;
font-size:20px;
margin: 10px;
  border-radius: 5px;
  color: ${Themes.primary};
  font-weight: bold;
  border: 2px solid transparent;
  background-color: ${({ bgColor }) => bgColor};
  &:hover {
    transition: width 1s ;
    width:15%; 
    height:60%;
    background-color: transparent;
    border: 2px solid ${Themes.primary};
  }
`;
export default function Button(props) {
    return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
}
