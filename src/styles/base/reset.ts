import { css } from 'styled-components';

export const reset = css`
  * {
    margin: 0;
    font-family: var(--font-main);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  html {
    font-family: var(--font-main);
    font-size: 16px;
  }

  body {
    font-family: var(--font-main);
    color: var(--color-primary);
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }
`;
