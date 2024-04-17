import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';
import { fonts } from './fonts';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${reset}
`;

export default GlobalStyle;
