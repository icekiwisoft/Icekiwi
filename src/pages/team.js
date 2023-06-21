import './team.scss'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function Team() {
    return (
        <div className="about">
            <Navbar />
            <div className="col">
                <h2 className="texte">Our Expert Team</h2>
            </div>


            <div className="container">
                <div className="row">

                    <div class="col">
                        <div className="team-box">
                            <div className="team-media">
                                <img src={image1} alt="" />
                            </div>
                            <div class="team-info">
                                <h3>Johnathan Doe</h3>
                                <p>Cardiologist</p>
                                
                                <ul className="team-social">
							        <li> <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>  </li>
							        <li> <a href="#"> <FontAwesomeIcon icon={faFacebook} /> </a>  </li>
							        <li> <a href="#"><FontAwesomeIcon icon={faTwitter} /> </a>  </li>
							        <li> <a href="#"><FontAwesomeIcon icon={faGithub} /></a>  </li>
							        <li> <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>  </li>
							    </ul> 
                            </div>
                        </div>
                    </div>

  

                </div>
            </div>
            <Footer/>
        </div>


    )
}
