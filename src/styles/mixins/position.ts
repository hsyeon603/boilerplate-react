export const position = {
  centerX: (type: 'absolute') => `
    position: ${type};
    left: 50%;
    transform: translateX(-50%);
	`,
  centerY: (type: 'absolute') => `
		position: ${type};
		top: 50%;
		transform: translateY(-50%);
	`,
  center: (type: 'absolute') => `
		position: ${type};
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	`,
};
