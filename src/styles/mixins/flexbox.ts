type FlexKey = keyof typeof flexValue;

const flexValue = {
  start: "flex-start",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  center: "center",
  stretch: "stretch",
};

const getFlexValue = (key: FlexKey) => flexValue[key];

export const flexbox = {
  default: (jc: FlexKey = "center", ai: FlexKey = "center") => `
    display: flex;
    align-items: ${getFlexValue(ai)};
    justify-content: ${getFlexValue(jc)};
  `,
  inline: (jc: FlexKey = "center", ai: FlexKey = "center") => `
    display: inline-flex;
    align-items: ${getFlexValue(ai)};
    justify-content: ${getFlexValue(jc)};
  `,
  column: (jc: FlexKey = "center", ai: FlexKey = "center") => `
    display: flex;
    flex-direction: column;
    align-items: ${getFlexValue(ai)};
    justify-content: ${getFlexValue(jc)};
  `,
};
