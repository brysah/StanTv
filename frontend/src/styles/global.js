import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
    border: none;
    box-sizing: border-box;
    font-family: "Open Sans",sans-serif;
}

img{
    max-width: 100%;
    display: block;
}
body{ 
        -webkit-font-smoothing: antialiased;
        background-color: #101010;
    }

html{
    font-size: 62.5%; 
}

button{ 
    cursor: pointer;
}

button,a{
    transition: all .3s;
}
`;
