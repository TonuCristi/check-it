import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /* Blue */
        --color-blue-100: #d0ebff;
        --color-blue-200: #a5d8ff;
        --color-blue-300: #74c0fc;
        --color-blue-400: #4dabf7;
        --color-blue-500: #339af0;
        --color-blue-600: #228be6;
        
        /* Red */
        --color-red-600: #fa5252;

        /* Gray */
        --color-gray-50: #f8f9fa;
        --color-gray-100: #f1f3f5;
        --color-gray-200: #e9ecef;
        --color-gray-300: #dee2e6;
        --color-gray-800: #343a40;
        --color-gray-900: #212529;
        
        /* Border */
        --border-blue-sm: 3px solid var(--color-blue-400);
        --border-blue-sm-t: 3px solid transparent;
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
    }
    
    body {
        font-family: "Roboto", sans-serif;
        line-height: 1;
        font-weight: 400;
        font-size: 1.6rem;
        position: relative;
    }
`;

export default GlobalStyle;
