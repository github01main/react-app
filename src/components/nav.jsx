import { StyledNav } from './styles/Nav.styled.js';

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

export default function nav (){
  return (
  <>
  <StyledNav>
      <ul id='nav-list'>
        <li><h2><a href='#'>Home</a></h2></li>
        <li><h2><a href='#'>About</a></h2></li>
        <li><h2><a href="#">Works</a></h2></li>
        <li><h2><a href='#'>Experience</a></h2></li>
        <li><h2><a href='#'>SNS</a></h2></li>
      </ul>
    </StyledNav>
  </>
  )
}