import styled from 'styled-components';

export const StyledHeader = styled.header`

// Keyframework for Header Section.
@keyframes opacity-controller { 
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes padding-controller { 
  0% {
    padding-bottom: 1vh;
  }

  100% {
    padding-bottom: 0vh;
  }
}


//#region Responsive Mobile. 
@media screen and (min-width: 360px){
  display : flex;
  flex-direction : column;
  width : 100%;
  height : 100vh;
  z-index: 1;

  background-color: ${({theme}) => theme.colors.main};
  transition: 0.25s;

  #slide-show
  {
    height: 100%;
    width: 100%;

    :empty
    {
      &::before
      {
        content: 'empty slide show article';
      }
    }
    
    // My Portfolio Video Links
    :first-child{
      position: relative;

      &:before{
        content: 'This is my most of favorite hobby. ';
        position: absolute;
        right: 0%;
        bottom: 20%;
        padding: 1vh 0.75vh 1vh 0.75vh;

        background : rgba(255, 0, 255, 0.15);
        backdrop-filter : blur(0.15vw);
        color: white;
        border-radius: 1vh;
        font-size: 1.5vh;
        
        animation-name : opacity-controller;
        animation-duration: 8s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
      }
    }
  }

  #controller
  {
    height: 100%;
    width: 100%;

    #business-card
    {
      display: flex;
      flex-direction: column;
      height: 70%;

      animation-name : opacity-controller;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
      animation-iteration-count: 1;

      h1{
        font-size : 4.5vh;
      }

      p
      {
        margin: 2.5vh 5vh 0vh 5vh;
        text-align : left;
        animation-name : opacity-controller;
        animation-duration: 2.5s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
        font-size : 1.5vh;
      }
    }
    .sns{
      display : flex;
      width : 100%;
      height: 30%;

      animation-name : opacity-controller;
      animation-duration: 3.5s;
      animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
      animation-iteration-count: 1;

      .sns-list{
        width : 6vh;
        height : 6vh;
      }

      a{
        display : flex;
        transition: 1s;
        padding : 0vh 3vh 0vh 3vh;
        
        animation-name : padding-controller;
        animation-duration: 5s;
        animation-timing-function: cubic-bezier(.17,.67,.83,.67);
        animation-iteration-count: infinite;

        &:hover
        {
          opacity: 0.5;
          transition: 0.15s;
        }
      }
    }
  }
}
//#endregion

//#region Responsive Tablet. 
@media screen and (min-width: 720px){
  display : flex;
  flex-direction : column;
  width : 100%;
  height : 100vh;
  z-index: 1;
  padding : 1.5vh 1.5vh 1.5vh 1.5vh;

  background-color: ${({theme}) => theme.colors.main};
  transition: 0.25s;

  #slide-show
  {
    height: 100%;
    width: 100%;

    :empty
    {
      &::before
      {
        content: 'empty slide show article';
      }
    }
    
    // My Portfolio Video Links
    :first-child{
      position: relative;

      &:before{
        content: 'This is my most of favorite hobby. ';
        position: absolute;
        right: 0%;
        bottom: 15%;
        padding: 1vh 0.75vh 1vh 0.75vh;

        background : rgba(255, 0, 255, 0.15);
        backdrop-filter : blur(0.15vw);
        color: white;
        border-radius: 1vh;
        font-size: 1.5vh;
        
        animation-name : opacity-controller;
        animation-duration: 8s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
      }
    }
  }

  #controller
  {
    height: 100%;
    width: 100%;

    #business-card
    {
      display: flex;
      flex-direction: column;
      height: 70%;

      animation-name : opacity-controller;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
      animation-iteration-count: 1;

      h1{
        font-size : 5.5vh;
      }

      p
      {
        margin: 2.5vh 5vh 0vh 5vh;
        text-align : left;
        animation-name : opacity-controller;
        animation-duration: 2.5s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
        font-size : 2vh;
      }
    }
    .sns{
      display : flex;
      width : 100%;
      height: 30%;

      animation-name : opacity-controller;
      animation-duration: 3.5s;
      animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
      animation-iteration-count: 1;

      .sns-list{
        width : 6vh;
        height : 6vh;
      }

      a{
        display : flex;
        transition: 1s;
        padding : 0vh 3vh 0vh 3vh;
        
        animation-name : padding-controller;
        animation-duration: 5s;
        animation-timing-function: cubic-bezier(.17,.67,.83,.67);
        animation-iteration-count: infinite;

        &:hover
        {
          opacity: 0.5;
          transition: 0.15s;
        }
      }
    }
  }
}
//#endregion

//#region Responsive Laptop. 
@media screen and (min-width: 1080px){
  display : flex;
  flex-direction : row;
  width : 100%;
  height : 100vh;
  z-index: 1;
  padding : 10vh 10vh 10vh 10vh;

  background-color: ${({theme}) => theme.colors.main};
  transition: 0.25s;

  #slide-show
  {
    height: 100%;
    width: 55%;

    :empty
    {
      &::before
      {
        content: 'empty slide show article';
      }
    }
    
    // My Portfolio Video Links
    :first-child{
      position: relative;

      &:before{
        content: 'This is my most of favorite hobby. ';
        position: absolute;
        right: 0%;
        bottom: 10%;
        padding: 1vh 0.75vh 1vh 0.75vh;

        background : rgba(255, 0, 255, 0.15);
        backdrop-filter : blur(0.15vw);
        color: white;
        border-radius: 1vh;
        font-size: 1.5vh;
        
        animation-name : opacity-controller;
        animation-duration: 8s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
      }
    }
  }

  #controller
  {
    height: 100%;
    width: 45%;

    #business-card
    {
      display: flex;
      flex-direction: column;
      height: 80%;

      animation-name : opacity-controller;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
      animation-iteration-count: 1;

      h1{
        font-size : 6.5vh;
      }

      p
      {
        margin: 2.5vh 5vh 0vh 5vh;
        text-align : left;
        animation-name : opacity-controller;
        animation-duration: 2.5s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
        font-size : 2vh;
      }
    }
    .sns{
      display : flex;
      width : 100%;
      height: 20%;

      animation-name : opacity-controller;
      animation-duration: 3.5s;
      animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
      animation-iteration-count: 1;

      .sns-list{
        width : 4vw;
        height : 4vh;
      }

      a{
        display : flex;
        transition: 1s;
        padding : 0vh 1.5vh 0vh 1.5vh;
        
        animation-name : padding-controller;
        animation-duration: 5s;
        animation-timing-function: cubic-bezier(.17,.67,.83,.67);
        animation-iteration-count: infinite;

        &:hover
        {
          opacity: 0.5;
          transition: 0.15s;
        }
      }
    }
  }
}
//#endregion

//#region Responsive Desktop 
@media screen and (min-width: 1440px){
  display : flex;
  flex-direction : row;
  width : 100%;
  height : 100vh;
  z-index: 1;
  padding : 15vh 15vh 15vh 15vh;

  background-color: ${({theme}) => theme.colors.main};
  transition: 0.25s;

  #slide-show
  {
    height: 100%;
    width: 55%;

    :empty
    {
      &::before
      {
        content: 'empty slide show article';
      }
    }
    
    // My Portfolio Video Links
    :first-child{
      position: relative;

      &:before{
        content: 'This is my most of favorite hobby. ';
        position: absolute;
        right: 0;
        bottom: 12.5%;
        padding: 1vh 0.75vh 1vh 0.75vh;

        background : rgba(255, 0, 255, 0.15);
        backdrop-filter : blur(0.15vw);
        color: white;
        border-radius: 1vh;
        font-size: 1.5vh;
        
        animation-name : opacity-controller;
        animation-duration: 8s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
      }
    }
  }

  #controller
  {
    height: 100%;
    width: 45%;

    #business-card
    {
      display: flex;
      flex-direction: column;
      height: 70%;

      animation-name : opacity-controller;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
      animation-iteration-count: 1;

      h1{
        font-size : 6.5vh;
      }

      p
      {
        margin: 10vh 5vh 0vh 5vh;
        text-align : left;
        animation-name : opacity-controller;
        animation-duration: 2.5s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
      }
    }
    .sns{
      display : flex;
      width : 100%;
      height: 30%;

      animation-name : opacity-controller;
      animation-duration: 3.5s;
      animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
      animation-iteration-count: 1;

      .sns-list{
        width : 4vw;
        height : 4vh;
      }

      a{
        display : flex;
        transition: 1s;
        padding : 0vh 1vh 0vh 1vh;
        
        animation-name : padding-controller;
        animation-duration: 5s;
        animation-timing-function: cubic-bezier(.17,.67,.83,.67);
        animation-iteration-count: infinite;

        &:hover
        {
          opacity: 0.5;
          transition: 0.15s;
        }
      }
    }
  }
}
//#endregion
`