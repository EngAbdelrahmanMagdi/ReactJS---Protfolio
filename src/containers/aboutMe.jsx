import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import { Element } from "react-scroll";
import Button from "../components/resume";
import Themes from "../themes";
// import { saveAs } from "file-saver";

const AboutUsContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 3em;
`;


const Header1 = styled.h1`
margin:20px;  
text-shadow: 2px 2px 4px #000000;
`

export default function AboutMe(props) {
    return (
        <AboutUsContainer name="AboutUsSection">
        <div class="m-5">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-sm-4" >
                        <Header1 >About ME</Header1>
                    </div>
                    <div class="col-sm-8" >
                        <p>My name is Abdelrahman Magdy Ibrahim Eldesouky. I graduated from 
                            faculty of petroleum and mining sciences and I became intersted 
                            more in programming stuff. I want to be a great fullstack developer 
                            soon and reach my goals. I love react, nodejs, js, PHP AND Laravel. 
                            I will graduate from ITI in two months and continue to forward. 
                        </p>
                        <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"download>
                        <Button bgColor={`${Themes.black}`}>Download Resume</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </AboutUsContainer>



    );
}