import styled from 'styled-components';

export const StyledNav = styled.nav`

  position: fixed;
  bottom: 0;
  margin: 0vh 0vw 5vh 0vw;
  transition: all 0.25s;
  font-size: 1vw;
  width : max-content;
  right : 50%;
  transform : translateX(50%) translateY(-60%);
  background : rgba(255, 0, 0, 0.75);
  backdrop-filter : blur(0.075vw);
  padding : 0.5vw 0.5vw;
  border-radius : 1vw;

  #nav-list{

    .logo-bundle{
      width : 2vw;
      height : 2vw;
    }

    display : flex;
    flex-direction : column;
    gap : 0.8vw;
    background : transparent;

    a{

      &:hover{
        opacity: 0.15;
        transition: all 0.25s;
      }
      
      &:after{
        content:""; 
        left: 50%; 

        width: 1px; 
        height: 1px; 
        background-color: white; 
      }

      display: inline-block; 
      position: relative;
      padding : 0vh 0vw 1vh 0vw;

      // Navgation Underline Left Side Animation.
      &:after{
        content:""; 
        position: absolute; 
        left: 50%; 
        bottom: 0; 
        width: 0; 
        height: 1px; 
        background-color: white; 
        transition: all .6s;
      }

      // Navgation Underline Right Side Animation.
      &:before{
        content:""; 
        position: absolute; 
        right: 50%; 
        bottom: 0; 
        width: 0; 
        height: 1px; 
        background-color: white; 
        transition: all .6s;
      }

      &:hover:before{
        width: 50%
      }

      &:hover:after{
        width: 50%
      }        
    }
  }
`