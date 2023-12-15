import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    color: white;
    text-decoration: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    min-height: 100vh;

    background-image: linear-gradient(#fc6c48 0%, #ef5081 100%);
  }
`

