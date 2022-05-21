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

@media screen and (min-width: 320px){
  display: block;  
  height: 70vh;
  width: 100%;
  background-color: ${({theme}) => theme.colors.main};
  transition: 0.25s;
  font-size : 1.15vw;

  #slide-show
  {
    height: 100%;
    width: 100%;
    padding : 4vh 4vw 4vh 4vw;
    background-color: ${({theme}) => theme.colors.main};

    :empty
    {
      &::before
      {
        content: 'empty slide show article';
      }
    }
    // My Portfolio Video Links
    iframe{
      opacity: 0.55;
      transition: 0.25s;
      z-index: 1;
      border: 0.2vw solid red;
      border-radius: 1vw 1vw 1vw 1vw;

      &:hover
      {
        opacity: 1;
        transition: 0.25s;
      }
    }
  }

  #controller
  {
    height: 100%;
    width: 100%;
    padding : 4vh 4vw 4vh 4vw;
    background-color: ${({theme}) => theme.colors.main};
    font-size : 3vw;

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
        font-size : 9vw;
      }

      p{
        margin: 5vh 1vw 0vh 1vw;
        animation-name : opacity-controller;
        animation-duration: 2.5s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
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
        width : 10vw;
        height : 10vh;
        margin-top :10vw;
        padding : 1.5vw;
      }

      a{
        display : flex;
        transition: 1s;

        
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

@media screen and (min-width: 768px){
  display: flex;  
  height: 50vh;
  width: 100%;
  background-color: ${({theme}) => theme.colors.main};
  transition: 0.25s;
  font-size : 1.15vw;

  #slide-show
  {
    height: 100%;
    width: 50%;
    padding : 4vh 4vw 4vh 4vw;
    background-color: ${({theme}) => theme.colors.main};

    :empty
    {
      &::before
      {
        content: 'empty slide show article';
      }
    }
    // My Portfolio Video Links
    iframe{
      opacity: 0.55;
      transition: 0.25s;
      z-index: 1;
      border: 0.2vw solid red;
      border-radius: 1vw 1vw 1vw 1vw;

      &:hover
      {
        opacity: 1;
        transition: 0.25s;
      }
    }
  }

  #controller
  {
    height: 100%;
    width: 50%;
    padding : 4vh 4vw 4vh 4vw;
    background-color: ${({theme}) => theme.colors.main};
    font-size : 1.5vw;

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
        font-size : 3vw;
      }

      p
      {
        margin: 3vh 1vw 0vh 1vw;

        animation-name : opacity-controller;
        animation-duration: 2.5s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
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
        margin-top : 13vh;
        padding : 0vw;
        width : 4vw;
        height : 4vh;
      }

      a{
        display : flex;
        transition: 1s;

        
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

@media screen and (min-width: 1366px){
  display: flex;  
  height: 65vh;
  width: 100%;
  background-color: ${({theme}) => theme.colors.main};
  transition: 0.25s;
  font-size : 1.25vw;

  #slide-show
  {
    height: 100%;
    width: 50%;
    padding : 4vh 4vw 4vh 4vw;
    background-color: ${({theme}) => theme.colors.main};

    :empty
    {
      &::before
      {
        content: 'empty slide show article';
      }
    }
    // My Portfolio Video Links
    iframe{
      opacity: 0.55;
      transition: 0.25s;
      z-index: 1;
      border: 0.2vw solid red;
      border-radius: 1vw 1vw 1vw 1vw;

      &:hover
      {
        opacity: 1;
        transition: 0.25s;
      }
    }
  }

  #controller
  {
    height: 100%;
    width: 50%;
    padding : 4vh 4vw 4vh 4vw;
    background-color: ${({theme}) => theme.colors.main};
    font-size : 1.05vw;

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
        font-size : 3vw;
      }

      p
      {
        margin: 5vh 1vw 0vh 1vw;

        animation-name : opacity-controller;
        animation-duration: 2.5s;
        animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
        animation-iteration-count: 1;
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
`