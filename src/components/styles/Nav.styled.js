import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0px 0px 50px 0px;

  #nav-list{
      display: flex;
      li{
          padding: 0vw 1vw 0vw 1vw;
          background: rgba(#000000, 0.15);
      }
  }
`