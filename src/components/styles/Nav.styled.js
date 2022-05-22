import styled from 'styled-components';

export const StyledNav = styled.nav`

  position: fixed;
  margin: 0vh 0vh 2vh 0vh;
  font-size: 1vw;
  width : max-content;
  right : 50%;
  transform : translateX(50%);
  background : rgba(255, 0, 0, 0.75);
  backdrop-filter : blur(0.075vw);
  z-index : 99;

//#region Responsive Desktop 
@media screen and (min-width: 320px){

  right : 12%;
  bottom: 8%;
  padding : 2vh 0vh 2vh 0vh;
  border-radius : 2vh 2vh 2vh 2vh;

  #nav-list{

    display: flex; 
    flex-direction : column;
    padding : 0.5vh 1vh 0.5vh 1vh;
    gap : 2vh;

    .logo-bundle{
      width : 4vh;
      height : 4vh;
      padding : 0.6vh;
    }
  
    .logo-bundle-active{
      width : 4vh;
      height : 4vh;
      padding : 0.5vh;
      border-radius : 25%;
      background : rgba(0, 0, 0, 0.75);
      backdrop-filter : blur(0.055vw);
    }
  
    a{
      padding : 0vh 1.5vh 0vh 1.5vh;
      
      &:hover{
        opacity: 0.5;
        transition: all 0.25s;
      }        
    }
  }    
}
//#region Responsive Tablet.
@media screen and (min-width: 720px){

  right : 4%;
  bottom: 8%;
  padding : 0.45vh 0.45vh;
  border-radius : 3vh 0vh 0vh 3vh;

  #nav-list{

    display: flex; 
    flex-direction : column;
    padding : 1vh 2.5vh 1vh 2.5vh;
    gap : 2vh;

    .logo-bundle{
      width : 4vh;
      height : 4vh;
      padding : 0.6vh;
    }
  
    .logo-bundle-active{
      width : 4vh;
      height : 4vh;
      padding : 0.5vh;
      border-radius : 25%;
      background : rgba(0, 0, 0, 0.75);
      backdrop-filter : blur(0.055vw);
    }
  
    a{
      padding : 0vh 1.5vh 0vh 1.5vh;
      
      &:hover{
        opacity: 0.5;
        transition: all 0.25s;
      }        
    }
  }    
}

//#region Responsive Laptop.
@media screen and (min-width: 1080px){
  
  right : 50%;
  bottom: 0;
  padding : 0.45vh 0.45vh;
  border-radius : 3vh 3vh 3vh 3vh;

  #nav-list{

    display: flex; 
    flex-direction : row;
    padding : 1vh 2.5vh 1vh 2.5vh;
    gap : 2vh;

    .logo-bundle{
      width : 4vh;
      height : 4vh;
      padding : 0.6vh;
    }
  
    .logo-bundle-active{
      width : 4vh;
      height : 4vh;
      padding : 0.5vh;
      border-radius : 25%;
      background : rgba(0, 0, 0, 0.75);
      backdrop-filter : blur(0.055vw);
    }
  
    a{
      padding : 0vh 1.5vh 0vh 1.5vh;
      
      &:hover{
        opacity: 0.5;
        transition: all 0.25s;
      }        
    }
  }    
}

//#region Responsive Desktop.
@media screen and (min-width: 1440px){

  right : 50%;
  bottom: 0;
  padding : 0.45vh 0.45vh;
  border-radius : 3vh 3vh 3vh 3vh;

  #nav-list{

    display: flex; 
    flex-direction : row;
    padding : 1vh 2.5vh 1vh 2.5vh;
    gap : 2vh;


    .logo-bundle{
      width : 4.5vh;
      height : 4.5vh;
      padding : 0.7vh;
    }
  
    .logo-bundle-active{
      width : 4.5vh;
      height : 4.5vh;
      padding : 0.6vh;
      border-radius : 25%;
      background : rgba(0, 0, 0, 0.75);
      backdrop-filter : blur(0.055vw);
    }
  
    a{
      padding : 0vh 1.5vh 0vh 1.5vh;
      
      &:hover{
        opacity: 0.5;
        transition: all 0.25s;
      }        
    }
  }  
}
`