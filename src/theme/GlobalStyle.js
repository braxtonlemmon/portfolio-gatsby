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
           work: "#f4ebdd",
           lemon: "#fbe683",
           golden: "#f3d63d",
           sandstone: "#78766a",
           lightgrey: "#b7b6bc",
           green: "#98a957",
           dark: "#003215",
           lightgreen: "#c4cca7",
           darkgreen: "#5e653b",
           lightergrey: '#ececec',
          //  ochre: '#bc9b5d',
           ochre: "#947439",
           text: "#474542"

         },
         fontSize: {
           one: '20.8px',
           two: '27.73px',
           three: '36.96px',
           four: '49.27px',
           five: '65.67px',
           six: '87.54px',
           seven: '5em'
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
    font-family: "Nerko One";
  }

  body {
    background: #fafafa;
    background: #474542;
    background: #fff;
    font-size: 20.8px;
    line-height: 30px;
  }
`

