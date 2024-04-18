import { styled } from "styled-components";
import { grid } from "../styles/constants/grid";

export const Container = styled.div(
  ({ theme }) => `
    width: 100%;
    padding: 0 ${grid.smMargin};
    margin: 0 auto;

    ${theme.responsive.md(`
      max-width: ${grid.mdMaxContainer};
      padding: 0 ${grid.mdMargin};
    `)}

    ${theme.responsive.lg(`
      max-width: ${grid.lgMaxContainer};
      padding: 0;
    `)}
  `,
);

export const Column = styled.div<{
  $smCount?: number;
  $mdCount?: number;
  $lgCount?: number;
}>`
  ${({ $smCount }) =>
    $smCount &&
    `width: ${($smCount / grid.lgColumns) * 100}%;
  `}

  ${({ theme, $mdCount }) =>
    $mdCount &&
    theme.responsive.md(`
    width: ${($mdCount / grid.lgColumns) * 100}%;
  `)}

  ${({ theme, $lgCount }) =>
    $lgCount &&
    theme.responsive.lg(`
    width: ${($lgCount / grid.lgColumns) * 100}%;
  `)}
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
