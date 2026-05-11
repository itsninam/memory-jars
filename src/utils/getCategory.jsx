export const getCategory = (label, list) => {
  return list.find((item) => item.label === label);
};
