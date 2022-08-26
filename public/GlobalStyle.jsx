import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        user-select: none;
    }
    body,html{
        overflow-x: hidden;
    }
`;

export default GlobalStyle;