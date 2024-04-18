/**
 * MOBILE (<768px) -------------------------
 * fixture --------------- sm
 * H of columns ---------- 4
 * gutter ---------------- 20px
 * margin ---------------- 5px
 * container-size -------- 100% - (5px * 2)
 *
 * TABLET (>=1200px) -----------------------
 * fixture --------------- md
 * H of columns ---------- 12
 * gutter ---------------- 20px
 * margin ---------------- 30px
 * container-size -------- 100% - (30px * 2)
 * max-container-size ---- 960px
 *
 * DESKTOP (<1200px) -----------------------
 * fixture --------------- lg
 * H of columns ---------- 12
 * gutter ---------------- 20px
 * unit ------------------ 75px
 * margin ---------------- auto
 * container-size -------- 1140px
 * max-container-size ---- 1140px
 */

const gutter = 20;
const lgUnit = 75;
const lgColumns = 12;
export const grid = {
  gutter: `${gutter}px`,
  smColumns: 4,
  smMargin: `5px`,
  mdColumns: 12,
  mdMargin: `30px`,
  mdMaxContainer: `${960 + gutter * 2}px`,
  lgColumns: 12,
  lgUnit: `${lgUnit}px`,
  lgMaxContainer: `${(lgUnit + gutter) * lgColumns}px`,
};
