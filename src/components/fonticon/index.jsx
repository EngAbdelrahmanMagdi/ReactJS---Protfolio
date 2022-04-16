import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Themes from "../../themes";

const LogoContainer = styled.div`
  height: 46px;
  width: 46px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  &:hover {
    transition: all 220ms ease-in-out;
    background-color: transparent;
    border: 2px solid ${Themes.primary};
  }
`;

const ArrowIcon = styled.div`
  color: ${Themes.white};
  font-size: 30px;
`;

export default function FontIcon(props) {
  return (
    <LogoContainer {...props}>
      <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </ArrowIcon>
    </LogoContainer>
  );
}
