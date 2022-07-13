import {
    Button,
    Container,
  } from "react-bootstrap";
import "../CSS/style.css";


function Features() {
  return (
    <div>
      <div FeaturesContainer className="pt-5">
        <div className="container">
          <div className="row py-lg-5">
            <div className="col-12 text-center py-5">
              <p className="Featurestext">OUR FEATURES</p>
              <h1 className="w-lg-75 mx-auto">
                The service we offer is specifically designed to meet your
                needs.
              </h1>
            </div>
            <div className="col-12 col-lg-4 col-md-2 col-sm-12 py-3">
              <div className="row">
                <div className="col-2  FeaturesIcon">
                  <i class="fa-solid fa-laptop-code"></i>
                </div>
                <div className="col-10 pt-2">
                  <div className="FeaturesTitle">
                    <h4>Software & Integration</h4>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-2 col-sm-12 py-3">
              <div className="row">
                <div className="col-2  FeaturesIcon">
                  <i class="fa-solid fa-shield"></i>
                </div>
                <div className="col-10 pt-2">
                  <div className="FeaturesTitle">
                    <h4>Network Security</h4>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-2 col-sm-12 py-3">
              <div className="row">
                <div className="col-2  FeaturesIcon">
                  <i class="fa-solid fa-cloud-arrow-up"></i>
                </div>
                <div className="col-10 pt-2">
                  <div className="FeaturesTitle">
                    <h4>Cloud Services</h4>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-2 col-sm-12 py-3">
              <div className="row">
                <div className="col-2  FeaturesIcon">
                  <i class="fa-solid fa-network-wired"></i>
                </div>
                <div className="col-10 pt-2">
                  <div className="FeaturesTitle">
                    <h4>Wireless Networking</h4>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-2 col-sm-12 py-3">
              <div className="row">
                <div className="col-2  FeaturesIcon">
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <div className="col-10 pt-2">
                  <div className="FeaturesTitle">
                    <h4>IT Solutions</h4>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-2 col-sm-12 py-3">
              <div className="row">
                <div className="col-2  FeaturesIcon">
                  <i class="fa-solid fa-server"></i>
                </div>
                <div className="col-10 pt-2">
                  <div className="FeaturesTitle">
                    <h4>Server Configuration</h4>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
