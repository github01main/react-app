import { StyledHeader } from './styles/Header.styled.js';
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
  
export default function header (){
  return (
      <StyledHeader>
        <div id='slide-show' data-testid='slide-show'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JOcuJe9uXx0?autoplay=1&mute=0&color=red&controls=1&fs=0&modestbranding=1" title="Identity" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div id='controller' data-testid='controller'>
          <div id='business-card'>
            <h1>shiwook cho</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, doloribus? Atque maxime quibusdam libero exercitationem, a quidem reprehenderit adipisci velit, laboriosam accusantium iste facilis fuga nesciunt quaerat praesentium ipsa quam?
            Totam nam repellendus consectetur eius vel, recusandae consequuntur non ullam, exercitationem in reprehenderit impedit deleniti ab possimus maiores ratione quis labore! Commodi perspiciatis doloremque ducimus eligendi, veritatis iusto consequatur itaque?</p>
          </div>
          <div className='sns'>
            <a href="https://www.linkedin.com/in/shiwookcho/?locale=en_US"><BsLinkedin id='Linkedin' /></a>
            <a href="https://www.instagram.com/shiwookcho/"><BsInstagram id='Instagram' /></a>
            <a href="https://github.com/github01main"><BsGithub id='Github' /></a>
          </div>
        </div>
      </StyledHeader>
  )
}