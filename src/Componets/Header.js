import {
  Button,
   Container,
} from "react-bootstrap";

import "../CSS/style.css";

function Header() {
  return (
    <div>
      <div>
        {/* HEADER SLIDER:START */}
        <header className="headerSlider mb-5">
          <div className="container ">
            <div className="row ">
              <div className="py-5 col-lg-6 col-12 headerLeftContent">
                <p>Networking solutions for worldwide communication</p>
                <p>
                  We're a company that focuses on establishing long-term
                  relationships with customers.
                </p>
                <div className="btn btn-primary">click me </div>
              </div>
              <div className="py-5 col-lg-6 col-12 headerImageWrp">
                <img
                  src={require("../IMG/headerImg1.png")}
                  alt=""
                  className="w-100 headerImage"
                />
              </div>
            </div>
          </div>
        </header>
        {/* HEADER SLIDER:START */}
      </div>
    </div>
  );
}

export default Header;
