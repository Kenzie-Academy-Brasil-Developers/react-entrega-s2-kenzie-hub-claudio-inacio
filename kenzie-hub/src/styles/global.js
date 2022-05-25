import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --white: #f5f5f5;
        --roxo: #2A1FE6;
        --black: #0c0d0d;
        -gray: #212529;
        --red: #3D0608;
    }
    body, input-security, button:{
        font-family: 'PT Serif', serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Roboto Mono', monospace;
        font-weight: 700px;
    }

    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;
