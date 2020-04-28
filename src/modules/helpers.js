export const getDimensions = element => {
  if (element) {
    const { width, height } = element.getBoundingClientRect();
    return { width, height };
  }

  return { width: 500, height: 500 };
};
