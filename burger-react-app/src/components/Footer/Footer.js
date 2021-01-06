import React from "react";
import './Footer.css';
import { MDBCol, MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
      
    <div>         
        <MDBFooter className="Footer">
            <MDBContainer fluid>
                <MDBCol >
                    <h3 className="title">Contact Me</h3>
                    {/* <ul> */}
                        <li >
                            <a href="https://www.linkedin.com/in/xiao-selina-tan/">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/xiaot6">Github</a>
                        </li>
                    {/* </ul> */}
                </MDBCol>
            </MDBContainer>
        </MDBFooter>
    </div>
  );
}

export default FooterPage;