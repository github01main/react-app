import styled from 'styled-components';

export const StyledNav = styled.nav`

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0vh 0vw 5vh 0vw;
  transition: all 0.25s;
  font-size: 1vw;
  
  #nav-list{
      display: flex;
      flex-direction: column;

      li{
          padding: 0.5vh 2vw 0.5vh 2vw;

          &:hover{
            opacity: 0.35;
            transition: all 1s;
          }
          
          &:after{
            content:""; 
            left: 50%; 
 
            width: 1px; 
            height: 1px; 
            background-color: white; 
          }

          a{
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
              width: 80%
            }

            &:hover:after{
              width: 80%
            }
            
          }
      }
  }
`