import { StyledHeader } from './styles/Header.styled.js';
export default function header (){
  return (
      <StyledHeader>
        <h1 id='slide-show' data-testid='slide-show'>hellow</h1>
        <h1 id='slide-show-controller' data-testid='slide-show-controller'>hellow2</h1>
      </StyledHeader>
  )
}
