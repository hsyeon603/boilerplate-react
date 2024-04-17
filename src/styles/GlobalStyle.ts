import { createGlobalStyle } from 'styled-components';
import { font } from './constants/font';
import { color } from './constants/color';
import normalize from 'styled-normalize';
import { reset } from './base/reset';
import { breakpoint } from './constants/breakpoint';

const GlobalStyle = createGlobalStyle`
    ${font}
    ${color}
    ${breakpoint}

    ${normalize}
    ${reset}

`;

export default GlobalStyle;
