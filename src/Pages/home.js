import { Link } from "react-router-dom";

function home(){
return(
    <div>
        <h1>This is Home Page</h1>
        <a href="/about">about</a>
        <a href="/contact">Contact</a>

        {/* <Link to="/about">Click to view our about page</Link>
        <Link to="/contact">Click to view our contact page</Link> */}
    </div>
      
    );
}

export default home;