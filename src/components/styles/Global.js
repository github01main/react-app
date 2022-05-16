import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    color: #FFF;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    text-align: center;
    align-self: center;
    align-content: center;
    justify-self: center;
    justify-content: center;
    place-items: center;
    
    font-family: 'Oswald', sans-serif;
  }
  
  body{
    background-color: ${({theme}) => theme.colors.main};
  }
`

export default GlobalStyles