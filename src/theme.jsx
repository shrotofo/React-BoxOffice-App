import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  mainColors: {
    blue: '#0e0069',
    gray: '#b8adad',
    dark: '#0e0069',
  },
  fontFamily: 'sans-serif, sans-serif',
  backgroundColor: '#001121' 
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 18px;
    margin: 0;
    padding-top: 40px;
    background-color: ${({ theme }) => theme.backgroundColor};
  }
  
`;

export const GlobalTheme = ({ children = null }) => { // Provide a default value for children
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
