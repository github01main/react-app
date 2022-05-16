import styled from 'styled-components';

export const StyledHeader = styled.header`
@media screen and (min-width: 320px){
  display: block;  
  height: 50vh;
  width: 100%;
  font-size : 2vw;
  background-color: ${({theme}) => theme.colors.sub_main};
  transition: 0.25s;

  #slide-show{
      display:flex;
      
      height: 100%;
      width: 100%;

      &::before{
        content: '';
      }
  }
  
  #controller{
      height: 100%;
      width: 100%;

      background-color: ${({theme}) => theme.colors.main};

      &::before{
        content: '';
      }

      &::after{
        content: '';
      }

      #business-card{
        display: flex;
        flex-direction: column;
        height: 80%;

        p{
          margin: 1vw 1vw 1vw 1vw;
        }
      }

      #buttons{
        display: flex;
        flex-direction: row;
        height: 20%;

        button{
          border : solid 0.1vw;
          border-radius : 0.5vw;

          margin : 0.5vw 0.60vw 0.5vw 0.60vw;
          padding: 0.15vw 1.35vw 0.15vw 1.35vw;

          opacity : 1;
          transition: 0.25s;

          &:hover{
            background-color : #FFF;
            opacity: 0.6;
            transition: 0.25s;
          }
        }
      }
    }

  @media screen and (min-width: 768px){
    display: flex;  
    height: 50vh;
    width: 100%;
    font-size : 1.15vw;
    background-color: ${({theme}) => theme.colors.sub_main};
    transition: 0.25s;

    #slide-show{
        display:flex;
        
        height: 100%;
        width: 65%;

        &::before{
          content: '';
        }
    }

    #controller{
        height: 100%;
        width: 35%;

        background-color: ${({theme}) => theme.colors.main};

        &::before{
          content: '';
        }

        &::after{
          content: '';
        }

        #business-card{
          display: flex;
          flex-direction: column;
          height: 80%;

          p{
            margin: 1vw 1vw 1vw 1vw;
          }
        }

        #buttons{
          display: flex;
          flex-direction: row;
          height: 20%;

          button{
            border : solid 0.1vw;
            border-radius : 0.5vw;

            margin : 0.5vw 0.60vw 0.5vw 0.60vw;
            padding: 0.15vw 1.35vw 0.15vw 1.35vw;

            opacity : 1;
            transition: 0.25s;

            &:hover{
              background-color : #FFF;
              opacity: 0.6;
              transition: 0.25s;
            }
          }
        }
      }

  @media screen and (min-width: 1366px){
    display: flex;  
    height: 65vh;
    width: 100%;
    background-color: ${({theme}) => theme.colors.sub_main};
    transition: 0.25s;
    font-size : 1.15vw;

    #slide-show{
        display:flex;
        
        height: 100%;
        width: 65%;

        &::before{
          content: '';
        }
    }

    #controller{
        height: 100%;
        width: 35%;

        background-color: ${({theme}) => theme.colors.main};

        &::before{
          content: '';
        }

        &::after{
          content: '';
        }

        #business-card{
          display: flex;
          flex-direction: column;
          height: 80%;

          p{
            margin: 1vw 1vw 1vw 1vw;
          }
        }

        #buttons{
          display: flex;
          flex-direction: row;
          height: 20%;

          button{
            border : solid 0.1vw;
            border-radius : 0.5vw;

            margin : 0.5vw 0.60vw 0.5vw 0.60vw;
            padding: 0.15vw 1.35vw 0.15vw 1.35vw;

            opacity : 1;
            transition: 0.25s;

            &:hover{
              background-color : #FFF;
              opacity: 0.6;
              transition: 0.25s;
            }
          }
        }
      }
  }
`