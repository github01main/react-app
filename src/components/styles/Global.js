import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

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
    
    font-family: 'Open Sans', sans-serif;
  }
  
  //#region Html && Body && Img Section

  html {
    scroll-behavior: smooth;
  }

  body{
    background-color: ${({theme}) => theme.colors.main};
  }

  img{
    display : block;
    width : 100%;
    object-fit : cover;
  }

  //#endregion

  //#region Scroll-Bar-Section

  ::-webkit-scrollbar {
    /* 스크롤바 전체 영역 */
  width: 0.45vw;
  } 
  ::-webkit-scrollbar-track {
      /* 스크롤이 움직이는 영역  */
  background-color: #000;
  } 
  ::-webkit-scrollbar-thumb {
      /*  스크롤  */
  background-color: gold; 
  } 
  ::-webkit-scrollbar-button:start:decrement, 
  ::-webkit-scrollbar-button:end:increment {
      /*  스크롤의 화살표가 포함된 영역   */
  height:8px;
  background-color: #FFF;
  } 
  ::-webkit-scrollbar-corner {
      /*  상하+좌우 스크롤이 만나는 공간   */
  background-color: #FFF;
  }

  //#endregion
} 
`

export default GlobalStyles