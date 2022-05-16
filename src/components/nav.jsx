import { StyledNav } from './styles/Nav.styled.js';

export default function nav (){
  return (
  <>
  <StyledNav>
      <ul id='nav-list' data-testid='nav-list'>
        <li><p><a href='#Home'>Home</a></p></li>
        <li><p><a href='#About'>About</a></p></li>
        <li><p><a href="#Works">Works</a></p></li>
        <li><p><a href='#Experience'>Experience</a></p></li>
        <li><p><a href='#SNS'>SNS</a></p></li>
      </ul>
    </StyledNav>
  </>
  )
}