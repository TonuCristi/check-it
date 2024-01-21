import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /* Violet */
        --color-violet-100: #e5dbff;
        --color-violet-200: #d0bfff;
        --color-violet-300: #b197fc;
        --color-violet-400: #9775fa;
        --color-violet-500: #845ef7;
        
        /* Border */
        --border-violet-sm: 2px solid var(--color-violet-400)
    }

    *, 
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        overflow: hidden;
        /* height: 100dvh; */
    }
    
    body {
        /* height: 100dvh; */
        font-family: "Roboto", sans-serif;
        line-height: 1;
        font-weight: 400;
        overflow: hidden;
    }
`;

export default GlobalStyle;