import { StyledNav } from './styles/Nav.styled.js';

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
        <li><p><a href='https://shiwookcho.com/#'>Home</a></p></li>
        <li><p><a href='#About'>About</a></p></li>
        <li><p><a href="#Works">Works</a></p></li>
        <li><p><a href='#Experience'>Experience</a></p></li>
        <li><p><a href='#SNS'>SNS</a></p></li>
      </ul>
    </StyledNav>
  </>
  )
}