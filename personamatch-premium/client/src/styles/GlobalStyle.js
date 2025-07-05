import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.light};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.accent};
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.md};
  }

  .section-title {
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.xl};

    h2 {
      font-size: 2.5rem;
      color: ${props => props.theme.colors.primary};
      margin-bottom: ${props => props.theme.spacing.sm};
    }

    p {
      color: ${props => props.theme.colors.textLight};
      max-width: 700px;
      margin: 0 auto;
    }
  }
`;

export default GlobalStyle;
