import { css } from 'styled-components';
import { responsivepoint } from '../constants/breakpoint';

type cssParams = Parameters<typeof css>;

export const responsive = {
  md: (args: cssParams) => `
    @media screen and (min-width: ${responsivepoint.md}) {
      ${args}
    }
  `,
  lg: (args: cssParams) => `
    @media screen and (min-width: ${responsivepoint.lg}) {
      ${args}
    }
  `,
};
