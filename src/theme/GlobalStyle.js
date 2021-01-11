import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme = {
         colors: {
           boxColor: "#e9e8e8a3",
           linkColor: "#551a91",
           fadedDark: "#464646",
          //  header: "#3d3d3d",
          //  header: '#b7b6bc',
           header: '#fff',
           work: "#f4ebdd"
         },
         fontSize: {
           paragraph: "1.3em",
         },
       }

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow-y: scroll;
    
  }

  body {
    background: #fafafa;
    background: #474542;
    background: #fff;
  }
`

