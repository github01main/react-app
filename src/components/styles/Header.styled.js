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

@media screen and (min-width: 320px){
  display: block;  
  height: 50vh;
  width: 100%;
  background-color: ${({theme}) => theme.colors.sub_main};
  transition: 0.25s;
  font-size : 2vw;

  #slide-show
  {
    display : flex;
    height: 100%;
    width: 100%;
    color : black;
    background-color: ${({theme}) => theme.colors.sub_main};

    :empty
    {
      &::before
      {
        color : white;
        content: 'empty slide show article';
      }
    }
  }

  #controller
  {
    height: 100%;
    width: 100%;

    background-color: ${({theme}) => theme.colors.main};

    &:before{ content: ''; }
    &:after{ content: ''; }

    #business-card{
      display: flex;
      flex-direction: column;
      height: 100%;

      p{
        margin: 1vw 1vw 1vw 1vw;
      }
    }
  }
}

@media screen and (min-width: 768px){
  display: flex;  
  height: 50vh;
  width: 100%;
  background-color: ${({theme}) => theme.colors.sub_main};
  transition: 0.25s;
  font-size : 1.15vw;

  #slide-show
  {
    height: 100%;
    width: 65%;
    color : black;

    background-color: ${({theme}) => theme.colors.sub_main};

    :empty
    {
      &::before
      {
        content: 'empty slide show article';
      }
    }

    #buttons
    {
      display: flex;
      align-content: flex-end;
      flex-wrap: wrap;
      height: 100%;
      
      button
      {
        border : solid 0.25vw;
        // border-color :aqua;
        border-radius : 1vw;

        margin : 0.5vw 0.60vw 2vw 0.60vw;
        padding: 0.15vw 1.35vw 0.15vw 1.35vw;

        opacity : 1;
        transition: 0.25s;
        background-color : #000;

        &:hover
        {
          opacity: 0.5;
          transition: 0.25s;
        }
      }
    }
  }

  #controller
  {
    height: 100%;
    width: 35%;

    background-color: ${({theme}) => theme.colors.main};

    &::before
    {
      content: '';
    }

    &::after
    {
      content: '';
    }

    #business-card
    {
      display: flex;
      flex-direction: column;
      height: 100%;

      p
      {
        margin: 1vw 1vw 1vw 1vw;
        // animation : taadaa 2s infinite;
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
      opacity: 0.75;
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

    &::before
    {
      content: '';
    }

    &::after
    {
      content: '';
    }

    #business-card
    {
      display: flex;
      flex-direction: column;
      height: 80%;

      animation-name : opacity-controller;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0.2,-2,0.8,2);
      animation-iteration-count: 1;

      p
      {
        margin: 10vh 1vw 0vh 1vw;

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

      a{
        display : flex;
        transition: 1s;

        &:hover
        {
          opacity: 0.5;
          transition: 0.15s;
          padding-bottom: 0.5vh;
        }

        #Linkedin{
          width : 4vw;
          height : 4vh;
        }
        #Instagram{
          width : 4vw;
          height : 4vh;
        }
        #Github{
          width : 4vw;
          height : 4vh;
        }
      }
    }
  }
}
`