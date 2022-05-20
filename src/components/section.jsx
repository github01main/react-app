import { StyledSection } from "./styles/Section.styled.js";
import profile from '../images/profile/shiwookcho.png';
import Resume from '../images/pdf/shiwookcho_resume.pdf';

export default function Section (){
  return (
  <>
  <StyledSection>
      <div id='section' data-testid='section'>
          <article id="About">
            <div id='about-left'>
              <div className='career'>
                  <div id='Company'>
                    <h4>Hive-mind Studio - Producer / Director</h4>
                    <h5>2021.01 ~ Now</h5>
                  </div>
                  <div id='Fashion'>
                    <h4>Partimento - japan Agency Contact manager</h4>
                    <h5>2018.02 ~ 19.04</h5>
                  </div>
                  <div id='University'>
                    <h4>Tokyo Communication Art - Car Design</h4>
                    <h5>2012.04 ~ 18.03</h5>
                  </div>
                  <div id='Rokmc'>
                    <h4>Republic of Korea Marine Corps - Served as Radio Operator</h4>
                    <h5>2013.05 ~ 15.03</h5>
                  </div>
                  <div id='Japanese'>
                    <h4>Toyo Language School - Japanese school of Tokyo</h4>
                    <h5>2011.02 ~ 12.03</h5>
                  </div>
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
        
        <article id="Works"><a href="#Works">Works</a></article>
        <article id="Experience"><a href="#Experience">Experience</a></article>
        <article id="Contact"><a href="#Contact">Contact</a></article>
      </div>
    </StyledSection>
  </>
  )
}