import { createGlobalStyle } from 'styled-components';
import { font } from './font';
import { color } from './color';
import normalize from 'styled-normalize';
import { reset } from './reset';

const GlobalStyle = createGlobalStyle`
    ${font}
    ${color}
    ${normalize}
    ${reset}

    span {
        font-family: var(--font-main);
        font-weight: 400;
        color: var(--color-blue);
    }
`;

export default GlobalStyle;
