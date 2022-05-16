import { StyledHeader } from './styles/Header.styled.js';
export default function header (){
  return (
      <StyledHeader>
        <div id='slide-show' data-testid='slide-show'>

        </div>
        <div id='controller' data-testid='controller'>
          <div id='business-card'>
            <h1>shiwook cho</h1>
            <h2>Front-End Developer</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, doloribus? Atque maxime quibusdam libero exercitationem, a quidem reprehenderit adipisci velit, laboriosam accusantium iste facilis fuga nesciunt quaerat praesentium ipsa quam?
            Totam nam repellendus consectetur eius vel, recusandae consequuntur non ullam, exercitationem in reprehenderit impedit deleniti ab possimus maiores ratione quis labore! Commodi perspiciatis doloremque ducimus eligendi, veritatis iusto consequatur itaque?</p>
          </div>

          <div id='buttons'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </StyledHeader>
  )
}