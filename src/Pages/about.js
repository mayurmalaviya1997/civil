import { Link } from "react-router-dom";

function about(){
    return(
        <div>
            <h1>This is About Page</h1>
            <Link to="/contact"> CONTACT</Link>
            <Link to="/"> HOME</Link>

        </div>
            
        );
    }
    
    export default about;