import {} from "react-bootstrap";

import "../CSS/style.css";

function Work() {
  return (
    <div>
      <div className="topWorkContainer my-5 ">
        <div className="container ">
          <div className="row WorkIcon pt-lg-5 pt-5">
            <div className="col-12 py-1 col-lg-3 col-md-3  ">
              <p className="h1">We are proud of our works</p>
              <p className="h5">
                We bring solutions to make life easier for our customers.
              </p>
            </div>

            <div className="col-12 py-1 col-lg-3 col-md-3 text-center  ">
              <i class="fa-solid fa-bullseye"></i>
              <p className="h1">1000+</p>
              <p className="h5">Completed Projects</p>
            </div>

            <div className="col-12 py-1 col-lg-3 col-md-3 text-center ">
              <i class="fa-solid fa-chart-line"></i>
              <p className="h1">4x</p>
              <p className="h5">Revenue Growth</p>
            </div>

            <div className="col-12 py-1 col-lg-3 col-md-3 text-center ">
              <i class="fa-solid fa-ranking-star"></i>
              <p className="h1">99.7%</p>
              <p className="h5">Customer Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="WorkCard Container   top-100">
          <div className="row ">
            <div className="col-12 col-lg-2 col-md-2 border border-primary m-0 bg-primary m-3 p-2 rounded ">
              <p>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vestibulum id ligula porta. Cras mattis consectetur.”
              </p>
              <p>Coriss Ambady</p>
              <p>Financial Analyst</p>
            </div>

            <div className="col-12 col-lg-2 col-md-2 border border-primary m-0 bg-primary m-3 p-2 rounded">
              <p>
                “Fusce dapibus, tellus ac cursus tortor mauris condimentum
                fermentum massa justo sit amet purus sit amet fermentum.”
              </p>
              <p>Cory Zamora</p>
              <p>Marketing Specialist</p>
            </div>

            <div className="col-12 col-lg-2 col-md-2 border border-primary m-0 bg-primary m-3 p-2 rounded">
              <p>
                “Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel
                augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae
                libero.”
              </p>
              <p>Nikolas Brooten</p>
              <p>Sales Manager</p>
            </div>

            <div className="col-12 col-lg-2 col-md-2 border border-primary m-0 bg-primary m-3 p-2 rounded">
              <p>
                “Etiam adipiscing tincidunt elit convallis felis suscipit ut.
                Phasellus rhoncus eu tincidunt auctor nullam rutrum, pharetra
                augue.”
              </p>
              <p>Coriss Ambadyp</p>
              <p>Financial Analyst</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div className="temp"></div>
    </div>
  );
}

export default Work;
