import { css } from 'styled-components';

const point = {
  md: '768px',
  lg: '1200px',
};

export const breakpoint = css`
  :root {
    --breakpoint-md: ${point.md};
    --breakpoint-lg: ${point.lg};
  }
`;

export const responsivepoint = point;
