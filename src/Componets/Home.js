
import NavigationBar from './NavigationBar.js';
import Header from './Header';
import Features from './Features';
import Speciality from './Speciality';
import Projects from './Projects'
import Work from './Work';
import '../CSS/style.css';
import Cardslider from './Cardslider.js';

function Home() {
  return (
    <div>
      <div>Thi is Home Page</div>
      <Header></Header>
      <Features></Features>
      <Speciality></Speciality>
      <Work></Work>
      <Projects/>

      <Cardslider></Cardslider>
    <div className="temp"></div>
    </div>
  );
}

export default Home;
