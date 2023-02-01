import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`
    html {
        font-family: Century Gothic, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: ${colors.globaltext}
    }

    body {
        margin: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    a {
      text-decoration: none;
      &: visited {
        color : ${colors.globaltext}
      }
    }

`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
