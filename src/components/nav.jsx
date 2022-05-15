import { StyledNav } from './styles/Nav.styled.js';

export default function nav (){
  return (
  <>
  <StyledNav>
      <ul id='nav-list' data-testid='nav-list'>
        <li><h2><a href='#Home'>Home</a></h2></li>
        <li><h2><a href='#About'>About</a></h2></li>
        <li><h2><a href="#Works">Works</a></h2></li>
        <li><h2><a href='#Experience'>Experience</a></h2></li>
        <li><h2><a href='#SNS'>SNS</a></h2></li>
      </ul>
    </StyledNav>
  </>
  )
}