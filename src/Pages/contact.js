
import { Link } from "react-router-dom";

function contact(){
    return(
        <div>
          <h1>This is contact Page</h1>
            <Link to="/about"> ABOUT</Link>
            <Link to="/"> HOME</Link>
        </div>
  
        );
    }
    
    export default contact;