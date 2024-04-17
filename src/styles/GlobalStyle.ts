import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';
import { font } from './font';
import { color } from './color';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${reset}
    ${font}
    ${color}

    span {
        font-family: 'Noto Sans KR', 'Roboto';
        font-weight: 400;
        color: var(--color-blue);
    }
`;

export default GlobalStyle;
