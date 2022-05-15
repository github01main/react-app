import styled from 'styled-components';

export const StyledHeader = styled.header`
  @media screen and (min-width: 320px){
      display: block;  
      height: 65vh;
      width: 100%;
      background-color: ${({theme}) => theme.colors.header};

      #slide-show{
          height: 100%;
          width: 100%;

          &::before{
            content: 'mobile';
          }
      }
      #slide-show-controller{
          height: 100%;
          width: 100%;
          background-color: rgb(133, 133, 212);

          &::before{
            content: 'mobile';
          }
      }
  }

  @media screen and (min-width: 768px){
    display: flex;  
    height: 65vh;
    width: 100%;
    background-color: ${({theme}) => theme.colors.header};

    #slide-show{
        height: 100%;
        width: 70%;

        &::before{
          content: 'laptop';
        }
    }
    #slide-show-controller{
        height: 100%;
        width: 30%;
        background-color:crimson;

        &::before{
          content: 'laptop';
        }
    }
  }

  @media screen and (min-width: 1366px){
    display: flex;  
    height: 65vh;
    width: 100%;
    background-color: ${({theme}) => theme.colors.header};

    #slide-show{
        height: 100%;
        width: 65%;
        &::before{
          content: 'desktop';
        }
    }
    #slide-show-controller{
        height: 100%;
        width: 35%;
        background-color:white;

        &::before{
          content: 'desktop';
        }
    }
  }
`