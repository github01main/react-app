import { StyledSection } from "./styles/Section.styled.js";
import profile from '../images/profile/shiwookcho.png';
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
                    <h5>Hive-mind Studio - Producer / Director</h5>
                    <h6>2021.01 ~ Now</h6>
                    </pre>
                </div>
                <div className="career-separate-section">
                    <img src={Partimento} alt="" />
                    <pre>
                    <h5>Partimento - japan Agency Contact manager</h5>
                    <h6>2018.02 ~ 19.04</h6>
                    </pre>
                </div>
                <div className="career-separate-section">
                    <img src={Tca} alt="" />
                    <pre>
                    <h5>Tokyo Communication Art - Car Design</h5>
                    <h6>2012.04 ~ 18.03</h6>
                    </pre>
                </div>
                <div className="career-separate-section">
                    <img src={Rokmc} alt="" />
                    <pre>
                    <h5>Republic of Korea Marine Corps - Radio Operator</h5>
                    <h6>2013.05 ~ 15.03</h6>
                    </pre>
                </div>
                  {/* 
                  <div id='Rokmc' className="career-list">
                    <h4>Republic of Korea Marine Corps - as Radio Operator</h4>
                    <h5>2013.05 ~ 15.03</h5>
                  </div>
                  <div id='Japanese' className="career-list">
                    <h4>Toyo Language School - school of Tokyo</h4>
                    <h5>2011.02 ~ 12.03</h5>
                  </div> */}
              </div>
            </div>

            <div id='about-right'>
              <div className='resume-profile'>
                  <img src={profile} alt="profile" />
                  <h2>shiwook cho</h2>
                  <a href={Resume} download>Download Resume</a>
              </div>
            </div>

          </article>
        
        <article id="Works" className='Category'><a href="#Works">Works</a></article>
        <article id="Experience" className='Category'><a href="#Experience">Experience</a></article>
        <article id="Contact" className='Category'><a href="#Contact">Contact</a></article>
      </div>
    </StyledSection>
  </>
  )
}