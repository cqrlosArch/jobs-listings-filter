import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --cyan:hsl(180, 29%, 50%);
    --cyanShadow:hsl(180, 29% ,50%, .5);
    --cyanBg:hsl(180, 52%, 96%);
    --cyanFilter:hsl(180, 31%, 95%);
    --cyanDark: hsl(180, 8%, 52%);
    --cyanVeryDark: hsl(180, 14%, 20%);
    --white: hsl(0, 0%, 100%);
  }


  html{
    font-size:1rem;
    box-sizing:border-box;
  }

  *,
  *::after,
  *::before{
    box-sizing:inherit;
  }
  
  body{
    margin:0;
    font-family: 'Spartan', sans-serif;
    min-height:100vh;
    background-color: var(--cyanBg);
  }
`;

export default GlobalStyle;
