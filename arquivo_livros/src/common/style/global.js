import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
:root {
  font-family: monospace;
  --white: #e6e8e6;
  --black: #1c1c1c;
  background-color: var(--white);
  color: var(--black);
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  place-items: center;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  min-height: 100vh;
}
`

