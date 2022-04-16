import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import Button from "../components/contact";
import Themes from "../themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'
import { faPhone } from '@fortawesome/fontawesome-free-solid'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Section = styled.div`
  width: 100%;
  height: 30vh;
  padding: 10;
  position: relative;
  background-color:black;
  
`;



export default function FooterContainer(props) {
    return (
        <Section>
            <div class="row">
                <div class="col p-3 text-white">
                    <h3>GET IN TOUCH</h3><br/>
                    <FontAwesomeIcon icon={faEnvelope}> </FontAwesomeIcon>
                    
                    <span>&nbsp; eng.abdelrahman.magdi@gmail.com </span> <br/><br/>
                    <FontAwesomeIcon icon={faPhone}> </FontAwesomeIcon>
                    <span>&nbsp; +201094073251</span>
                    
                </div>
                <div class="col p-3 text-white"><a href="#">
                    <Button bgColor={`${Themes.black}`}>Contact Me</Button>
                </a></div>
                <div class="col p-3 text-white">
                    <br/>
                    <FaFacebookF /> &nbsp; &nbsp;
                    <FaLinkedin /> &nbsp; &nbsp;
                    <FaTwitter /> &nbsp; &nbsp;

                    <br/><br/>
                    <p>
                        Copyright 2019 &copy; RK
                    </p>
                </div>
            </div>

        </Section>



    );
}