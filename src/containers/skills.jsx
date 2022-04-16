import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";



const Section = styled.div`
  width: 100%;
  height: 130vh;
  padding: 0;
  position: relative;
  background-color:rgb(30, 30, 30);
  
`;

const Header1 = styled.h1`
color: white; 
font-size: 400%;
padding:20px;
magin: 20px;
`
const Paragraph1 = styled.p`
color: white; 
font-size: 90%;
`



export default function Skills(props) {
    return (
        <Section>
            <div class="justify-content-center m-5">
                <Header1>Skills</Header1>
                <br />
                <Paragraph1>Resize this responsive page to see the effect!
                    Resize this responsive page to see the effect!Resize this responsive page to see the effect!Resize this responsive page to see the effect!Resize this responsive page to see the effect!Resize this responsive page to see the effect!Resize this responsive page to see the effect!Resize this responsive page to see the effect!
                    effect!Resize this responsive page to see the effect!Resize this responsive page to see the effect!Resize this responsive page to see the effect!Resize this responsive page to see the effect!Resize this responsive page to see the effect!Resize this responsive page to see the effect!
                </Paragraph1>
            </div>
            <div class="row">
                <div class="col-sm-5" style={{ color: "white" }}>
                    <h3 style={{ alignItems: "center" }}>MY FOCUS HERE</h3><hr/><br/>
                    <ul style={{ listStyleType: "none" }}>
                        <li>UI/ UX</li> <br/>
                        <li>Responsive Page</li><br/>
                        <li>Front end developer</li><br/>
                        <li>Back end developer</li><br/>
                    </ul>
                </div>
                <div class="col-sm-6">

                    <div class="container mt-3">


                        <div class="progress">
                            <div class="progress-bar" style={{ width: "10%" }}>CSS</div>
                        </div><br />


                        <div class="progress">
                            <div class="progress-bar bg-success" style={{ width: "30%" }}>HTML</div>
                        </div><br />


                        <div class="progress">
                            <div class="progress-bar bg-info" style={{ width: "50%" }}>JAVASCRIPT</div>
                        </div><br />


                        <div class="progress">
                            <div class="progress-bar bg-warning" style={{ width: "20%" }}>PHP</div>
                        </div><br />


                        <div class="progress">
                            <div class="progress-bar bg-danger" style={{ width: "70%" }}>LARAVEL</div>
                        </div><br />


                        <div class="progress border">
                            <div class="progress-bar bg-white" style={{ width: "80%" }}>NODEJS</div>
                        </div><br />

                    
                        <div class="progress">
                            <div class="progress-bar bg-secondary" style={{ width: "100%" }}>PYTHON</div>
                        </div><br />


                        <div class="progress border">
                            <div class="progress-bar bg-secondary" style={{ width: "20%" }}>RUBY</div>
                        </div><br />


                        <div class="progress">
                            <div class="progress-bar bg-dark" style={{ width: "60%" }}>GO</div>
                        </div>
                    </div>

                </div>
            </div>

        </Section>


    );
}
