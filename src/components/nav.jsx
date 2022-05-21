import { StyledNav } from './styles/Nav.styled.js';
import {HiHome} from 'react-icons/hi';
import {MdAccountBox} from 'react-icons/md';
import {GiGearHammer} from 'react-icons/gi';
import {MdEmail} from 'react-icons/md';
import {IoDocumentLock} from 'react-icons/io5'
// When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("nav-list").style.fontSize = "1.35vw";
//   } else {
//     document.getElementById("nav-list").style.fontSize = "1.25vw";
//   }
// }

export default function nav (){
  return (
  <>
  <StyledNav>
      <ul id='nav-list' data-testid='nav-list'>
        <a href='https://shiwookcho.com/#'><HiHome className='logo-bundle'/></a>
        <a href='#About'><MdAccountBox className='logo-bundle'/></a>
        <a href="#Works"><GiGearHammer className='logo-bundle'/></a>
        <a href='#Experience'><IoDocumentLock className='logo-bundle'/></a>
        <a href='#Contact'><MdEmail className='logo-bundle'/></a>
      </ul>
    </StyledNav>
  </>
  )
}