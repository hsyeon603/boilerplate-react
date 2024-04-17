import { createGlobalStyle } from 'styled-components';
import { font } from './constants/font';
import { color } from './constants/color';
import normalize from 'styled-normalize';
import { reset } from './base/reset';

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
