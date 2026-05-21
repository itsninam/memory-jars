export const getDaysLeft = (date) => {
  const sealedDate = new Date(date);
  const currentDate = new Date();

  const diffInMs = sealedDate - currentDate;

  const daysLeft = diffInMs / (1000 * 60 * 60 * 24);

  return Math.floor(daysLeft);
};
