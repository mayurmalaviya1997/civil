import '../CSS/style.css';
import Button from '@mui/material/Button';
import { FaApple } from "react-icons/fa";

function Contact(){
    return(
        <div>
        <div>Thi is Contact Page</div>
        <ul>
            <li>
            <Button variant="contained">Contained</Button>
            </li>
            <li>
                <FaApple/>
            </li>
            <li></li>
            <li></li>
        </ul>
        </div>
        );
    }
    
    export default Contact;