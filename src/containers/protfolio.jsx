import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";


const Section = styled.div`
  width: 100%;
  height: 110vh;
  padding: 10;
  position: relative;
  background-color:white;
  
`;
const Header1 = styled.h1`
margin:15px;  
text-shadow: 2px 2px 4px #000000;
align-items: flex-start;
`

export default function Protfolio(props) {
    return (
        <Section>
            <Header1>Protfolio</Header1><br/>
            <div class="container mt-3">


                <div class="row m-3">
                    <div class="col-sm-4 p-3 text-white">

                        <div class="card p-5 bg-secondary text-white">
                            <div class="card-body ">UI/UX
                            </div><hr/>
                        </div>
                        <br/><br/>
                        <div class="card p-5 bg-dark text-white">
                            <div class="card-body">MOBILE APP
                            </div><hr/>
                        </div>
                    </div>
                    <div class="col-sm-4 p-3 text-white">

                        <div class="card p-5 bg-dark text-white">
                            <div class="card-body">FRONT END
                            </div><hr/>
                        </div>
                        <br/><br/>
                        <div class="card p-5 bg-secondary text-white">
                            <div class="card-body">BACK END
                            </div><hr/>
                        </div>
                    </div>
                    <div class="col-sm-4 p-3 text-white">

                        <div class="card p-5 bg-secondary text-white">
                            <div class="card-body">FULLSTACK
                            </div><hr/>
                        </div>
                        <br/><br/>
                        <div class="card p-5 bg-dark text-white">
                            <div class="card-body">ADMINSTRATOR
                            </div><hr/>
                        </div>
                    </div>
                </div>

            </div>


        </Section>


    );
}