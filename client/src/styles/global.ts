import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F8F8F8;
        --black:#000000;
        --white: #FFFFFF;
        --text-title:#000000;
        --text-body:#969CB3;
        --shape:#FFFFFF;
        --green: #66CDAA;
        --red: #B22222;
        --orange: #eb7134

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: sans-serif;
        font-weight: 400;
    }    
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25px;
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover{
            filter: opacity(0.6);
        }
    }
`;