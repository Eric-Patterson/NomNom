import { Link } from "react-router-dom";
import "../About.css"


function AboutPage() {
  return (
    <p>
        <h2 className="title"> Our mission is to solve community hunger through 
        the contributions, involvement and care of our community. </h2>
        
        <div className="centerImg">
            <img src={process.env.PUBLIC_URL + "/donationbox.jpg"} />
        </div>


        <div className ="whoWeAre">
        Who we are: We are called "Java Chips" and we are awesome.
        Our team includes: Eric, Ali, Mahmuda, and Hannah.
        
        
        </div>
    </p>
    
  );
}

export default AboutPage;