export const compareDate = (date) => {
  return (
    new Date(date).toLocaleDateString("en-CA") >
    new Date().toLocaleDateString("en-CA")
  );
};
