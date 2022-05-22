import { StyledHeader } from './styles/Header.styled.js';
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
  
export default function header (){
  return (
      <StyledHeader id='#'>
        <div id='slide-show' data-testid='slide-show'>
        <iframe data-text="Thanks for hovering! I'm a tooltip"  
                width="100%" height="100%" src="https://www.youtube.com/embed/BbIhqNyT4-M?autoplay=1&mute=0&color=red&controls=1&fs=0&modestbranding=1" 
                title="Identity" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div id='controller' data-testid='controller'>
          <div id='business-card'>
            <h1>shiwook cho</h1>
            <p>Indie Game Director and Design and Development I'm shiwook jo from south korea, and i do content on Design an Development. 
               I really enjoy learning languages and New software Development frameworks like Django and Javascript, as well as work in Hive-mind studio. 
               The planning and design of the project was mainly done. And I used to blender as a sub-skill. and developed an indie game with the blueprint of Unreal Engine based on C++ for 5 years. 
               People ask me. Why do you always find difficult things, solve them, and show them?. as i say that's my milestone.</p>
          </div>
          <div className='sns'>
            <a href="https://www.linkedin.com/in/shiwookcho/?locale=en_US"><BsLinkedin className='sns-list' /></a>
            <a href="https://www.instagram.com/shiwookcho/"><BsInstagram className='sns-list' /></a>
            <a href="https://github.com/github01main"><BsGithub className='sns-list' /></a>
          </div>
        </div>
      </StyledHeader>
  )
}