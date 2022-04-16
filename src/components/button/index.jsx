import React from "react";
import Themes from "../../themes";
import styled from "styled-components";

const ButtonContainer = styled.button`
position: absolute;
bottom: 30%;
left: 25%;
transform: translateX(-50%);
height:100px; 
width:200px;
font-size:30px; 
  border-radius: 5px;
  color: ${Themes.primary};
  font-weight: bold;
  border: 2px solid transparent;
  background-color: ${({ bgColor }) => bgColor};
  &:hover {
    transition: width 1s ;
    width:25%; 
    height:16%;
    background-color: transparent;
    border: 2px solid ${Themes.primary};
  }
`;
export default function Button(props) {
    return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
}
