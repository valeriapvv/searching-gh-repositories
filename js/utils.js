// Remove
const removeElement = ({
  className,
  container,
}) => {
  const element = container.querySelector(`.${className}`);

  if (element) {
    element.remove();
  }
};

// Encode
const SymbolsMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#x27;',
  '/': '&#x2F;',
};

const encodeForHtml = (string = '') => {
  const regExp = /[&<>"'/]/ig;
  return `${string}`.replace(regExp, (match) => SymbolsMap[match]);
};

export {
  removeElement,
  encodeForHtml,
};
