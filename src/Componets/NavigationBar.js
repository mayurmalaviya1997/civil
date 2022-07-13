import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";

import "../CSS/style.css";
import { Link } from "react-router-dom";

/* ALL PAGES */
import home from './Home';
import about from './About';
import contact from './Contact';
import blog from './Blog';
import '../CSS/style.css';

function NavigationBar() {
  return (
    <div>

     <div className="NavigationBarWrp">
      <div className="container sticky-top">
        <div className="row">
          <Navbar expand="lg">
            <Container fluid>
              {/* NAV LOGO */}
              <Navbar.Brand href="#" className="col-2">
                <img
                  src={require("../IMG/logo.png")}
                  alt="logo"
                  className="headerLogo"
                />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0  offset-lg-2 col-lg-6  justify-content-evenly "
                  style={{ maxHeight: "100px" }}
                  navbarScroll>
                    
                  <Link to="/"> Home </Link>
                  <Link to="/about"> About </Link>
                  <Link to="/contact"> Contact </Link>
                  <Link to="/blog"> Blog </Link>
                </Nav>

                {/* SOCIAL */}
                <div className="SocialLogo col-lg-2 offset-col-2 ">
                  <a href="#">
                    {" "}
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i class="fa-brands fa-dribbble"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i class="fa-brands fa-twitter"></i>{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <i class="fa-brands fa-instagram"></i>{" "}
                  </a>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>


  </div>);
}

export default NavigationBar;
