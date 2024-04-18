type PositionValue = "absolute" | "fixed";

export const position = {
  centerX: (type: PositionValue = "absolute") => `
    position: ${type};
    left: 50%;
    transform: translateX(-50%);
	`,
  centerY: (type: PositionValue = "absolute") => `
		position: ${type};
		top: 50%;
		transform: translateY(-50%);
	`,
  center: (type: PositionValue = "absolute") => `
		position: ${type};
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	`,
};
