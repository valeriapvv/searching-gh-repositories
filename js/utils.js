const removeElement = ({
  className,
  container,
}) => {
  const element = container.querySelector(`.${className}`);

  if (element) {
    element.remove();
  }
};

export {
  removeElement,
};
