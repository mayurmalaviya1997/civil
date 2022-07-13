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

function Speciality() {
  return (
    <div>
      <div>
        {/* .SpecialityContent: TOP */}
        <div className="container my-5 SpecialityContainer">
          <div className="row">
            <div className="col-12 col-lg-6 col-sm-12 col-md6 ">
              <img
                src={require("../IMG/SpecialityImg1.png")}
                alt=""
                className="w-100"
              />
            </div>

            <div className="col-12 col-lg-6 col-sm-12 col-md6  SpecialityContent ">
              <p className="pt-5">HAVE PERFECT CONTROL</p>
              <p className="h2">
                We bring solutions to make life easier for our customers.
              </p>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                augue rutrum.
              </p>
              <div className="row">
                <div className="col-12 col-lg-6 col-md-12 d-flex">
                  <div>
                    <i class="fa-regular fa-circle-check mx-2 "></i>{" "}
                  </div>
                  <div> Aenean quam ornare. Curabitur blandit.</div>
                </div>
                <div className="col-12 col-lg-6 col-md-12 d-flex">
                  <div>
                    <i class="fa-regular fa-circle-check mx-2 "></i>{" "}
                  </div>
                  <div> Aenean quam ornare. Curabitur blandit.</div>
                </div>
                <div className="col-12 col-lg-6 col-md-12 d-flex">
                  <div>
                    <i class="fa-regular fa-circle-check mx-2 "></i>{" "}
                  </div>
                  <div> Aenean quam ornare. Curabitur blandit.</div>
                </div>
                <div className="col-12 col-lg-6 col-md-12 d-flex">
                  <div>
                    <i class="fa-regular fa-circle-check mx-2 "></i>{" "}
                  </div>
                  <div> Aenean quam ornare. Curabitur blandit.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .SpecialityContent: TOP */}

        {/* .SpecialityContent: BOTTOM */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12 col-sm-12 SpecialityContent">
              <p>WHAT MAKES US DIFFERENT?</p>
              <p className="h2">We make spending stress free so you have the perfect control.</p>
              <p>Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus. Integer posuere erat a ante venenatis dapibus posuere velit.</p>
              <div className="d-flex">
                  <div> <i class="fa-regular fa-circle-check mx-2 "></i>{" "}</div>
                  <div>Aenean eu leo quam. Pellentesque ornare.</div>
              </div>
              <div className="d-flex">
                  <div> <i class="fa-regular fa-circle-check mx-2 "></i>{" "}</div>
                  <div>Aenean eu leo quam. Pellentesque ornare.</div>
              </div>
              <div className="d-flex">
                  <div> <i class="fa-regular fa-circle-check mx-2 "></i>{" "}</div>
                  <div>Aenean eu leo quam. Pellentesque ornare.</div>
              </div>

            </div>

            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                <img src={require("../IMG/SpecialityImg2.jpg")} alt="" className="w-100 rounded" />
            </div>
          </div>
        </div>
        {/* .SpecialityContent: BOTTOM */}
      </div>
    </div>
  );
}

export default Speciality;
