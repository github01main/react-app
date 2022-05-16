import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.js';
import Header from './components/header.jsx';
import Nav from './components/nav.jsx'

// import './components/nav/section.jsx'
// import './components/nav/aside.jsx'
// import './components/nav/footer.jsx'

const theme = {
  colors:{
    main : '#000',
    sub_main : '#FFF',
    main_text : '#FFF',
    header : '#ebfbff',
    body : '#fff',
    footer : '#003333',
  },
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header />
      <Nav />
    </>
    </ThemeProvider>
  );
}