import { StyledHeader } from './styles/Header.styled.js';
export default function header (){
  return (
      <StyledHeader>
        <div id='slide-show' data-testid='slide-show'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JOcuJe9uXx0" title="Identity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div id='controller' data-testid='controller'>
          <div id='business-card'>
            <h1>shiwook cho</h1>
            <h2>Front-End Developer</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, doloribus? Atque maxime quibusdam libero exercitationem, a quidem reprehenderit adipisci velit, laboriosam accusantium iste facilis fuga nesciunt quaerat praesentium ipsa quam?
            Totam nam repellendus consectetur eius vel, recusandae consequuntur non ullam, exercitationem in reprehenderit impedit deleniti ab possimus maiores ratione quis labore! Commodi perspiciatis doloremque ducimus eligendi, veritatis iusto consequatur itaque?</p>
          </div>
        </div>
      </StyledHeader>
  )
}