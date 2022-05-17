import styled from 'styled-components';

export const StyledNav = styled.nav`

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0vh 0vw 8vh 0vw;
  transition: all 0.25s;
  font-size: 1.25vw;
  
  #nav-list{
      display: flex;
      li{
          padding: 0vh 2vw 0vh 1vw;
          background: rgba(#000000, 0.15);

          &:hover{
            opacity: 0.5;
            transition: all 0.25s;
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