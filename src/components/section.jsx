import { StyledSection } from "./styles/Section.styled.js";
import profile from '../images/profile/shiwookcho_2.jpg';
import Hive_mind_studio from '../images/profile/hive_mind_studio.png';
import Tca from '../images/profile/tca.png';
import Partimento from '../images/profile/partimento.png';
import Rokmc from '../images/profile/rokmc.png'
import Resume from '../images/pdf/shiwookcho_resume.pdf';

export default function Section (){
  return (
  <>
  <StyledSection>
      <div id='section' data-testid='section'>
          <article id="About">
            <div id='about-left'>
              <div className='career'>
                <div className="career-separate-section">
                    <img src={Hive_mind_studio} alt="" />
                    <pre>
                    <h5>Hive-mind studio - Producer / Director</h5>
                    <h6>2021.01 ~ Now</h6>
                    </pre>
                </div>
                <div className="career-separate-section">
                    <img src={Partimento} alt="" />
                    <pre>
                    <h5>Partimento - Japan agency contact manager</h5>
                    <h6>2018.02 ~ 19.04</h6>
                    </pre>
                </div>
                <div className="career-separate-section">
                    <img src={Tca} alt="" />
                    <pre>
                    <h5>Tokyo communication art - Car design</h5>
                    <h6>2012.04 ~ 18.03</h6>
                    </pre>
                </div>
                <div className="career-separate-section">
                    <img src={Rokmc} alt="" />
                    <pre>
                    <h5>Republic of korea marine corps - Radio operator</h5>
                    <h6>2013.05 ~ 15.03</h6>
                    </pre>
                </div>
              </div>
            </div>

            <div id='about-right'>
              <div className='resume-profile'>
                  <img src={profile} alt="profile" />
                  <h2>hellow there ?</h2>
                  <a href={Resume} download>Download Resume</a>
              </div>
            </div>

          </article>
        
        <article id="Works" className='Category'>

          {/* Thumbnail images */}

          <div id='main-frame'>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vVbSRfmq_n8?autoplay=0&mute=0&color=red&controls=1&fs=0&modestbranding=1" 
                    title="Identity" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div id="sub-frame">
            <div className="frames">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vVbSRfmq_n8?autoplay=0&mute=0&color=red&controls=1&fs=0&modestbranding=1" 
                    title="Identity" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="frames">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/75sKAu7gVKc?autoplay=0&mute=0&color=red&controls=1&fs=0&modestbranding=1" 
                    title="Identity" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="frames">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fbh8Y2Z-_dg?autoplay=0&mute=0&color=red&controls=1&fs=0&modestbranding=1" 
                    title="Identity" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="frames">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uh5mh7eSi_4?autoplay=0&mute=0&color=red&controls=1&fs=0&modestbranding=1" 
                    title="Identity" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </article>

        <article id="Experience" className='Category'><a href="#Experience">Experience</a></article>
        <article id="Contact" className='Category'><a href="#Contact">Contact</a></article>
      </div>
    </StyledSection>
  </>
  )
}