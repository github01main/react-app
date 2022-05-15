import { StyledNav } from './styles/Nav.styled.js';

export default function nav (){
  return (
  <>
  <StyledNav>
      <ul id='nav-list' data-testid='nav-list'>
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