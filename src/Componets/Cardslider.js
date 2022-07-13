import '../CSS/Cardslider.css';
import { Container,row,col } from 'react-bootstrap';

/* IMAGES */
import img1 from '../IMG/b4.jpg'

function Cardslider(){
return(
    <div>
        <div className="my-5">
            <div className="sliderContainer container">
                <div className="sliderWrapper row d-flex ">
                    <div className="card col-12 col-lg-4">
                        <div className="cardImageSection">
                            <span className='overlay'>
                                <p>Read More</p>
                            </span>
                            <img src={img1} alt="cardImage" className='cardImage' />
                        </div>
                        <div className="cardContentSection">
                            <div> <h3>Lorem ipsum dolor sit.</h3></div>
                            <div>
                                <span className="date">15-10-1997</span>
                                <span className="doc">code</span>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-lg-4">
                        <div className="cardImageSection">
                            <span className='overlay'>
                                <p>Read More</p>
                            </span>
                            <img src={img1} alt="cardImage" className='cardImage' />
                        </div>
                        <div className="cardContentSection">
                            <div> <h3>Lorem ipsum dolor sit.</h3></div>
                            <div>
                                <span className="date">15-10-1997</span>
                                <span className="doc">code</span>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-lg-4">
                        <div className="cardImageSection">
                            <span className='overlay'>
                                <p>Read More</p>
                            </span>
                            <img src={img1} alt="cardImage" className='cardImage' />
                        </div>
                        <div className="cardContentSection">
                            <div> <h3>Lorem ipsum dolor sit.</h3></div>
                            <div>
                                <span className="date">15-10-1997</span>
                                <span className="doc">code</span>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>


            {/* <div className="sliderContainer">
                <div className="slider">
                    <div className="btn-container">
                        <button className='Prev'>
                            <span>Prev</span>
                        </button>
                        <button className='Next'>
                            <span>Next</span>
                        </button>
                    </div>
                    <div className="slide-container">
                        <div className="slide slide-1"><span>Item-1</span></div>
                        <div className="slide slide-2"><span>Item-2</span></div>
                        <div className="slide slide-3"><span>Item-3</span></div>
                        <div className="slide slide-4"><span>Item-4</span></div>
                        <div className="slide slide-5"><span>Item-5</span></div>
                        <div className="slide slide-6"><span>Item-6</span></div>
                        <div className="slide slide-7"><span>Item-7</span></div>
                        <div className="slide slide-8"><span>Item-8</span></div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    );
}



export default Cardslider;