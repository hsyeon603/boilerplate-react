import { css } from 'styled-components';

import NotoSansRegular from '../../assets/fonts/NotoSansKR-Regular.ttf';
import NotoSansSemiBold from '../../assets/fonts/NotoSansKR-SemiBold.ttf';
import NotoSansExtraBold from '../../assets/fonts/NotoSansKR-ExtraBold.ttf';

export const font = css`
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('NotoSansKR'), url(${NotoSansRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('NotoSansKR'), url(${NotoSansSemiBold}) format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('NotoSansKR'), url(${NotoSansExtraBold}) format('truetype');
  }

  :root {
    --font-main: 8 'Noto Sans KR', sans-serif;
  }
`;
