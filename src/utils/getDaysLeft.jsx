export const getDaysLeft = (date) => {
  const sealedDate = new Date(date);
  const currentDate = new Date();

  const diffInMs = currentDate - sealedDate;

  const daysLeft = diffInMs / (1000 * 60 * 60 * 24);

  return Math.abs(Math.floor(daysLeft));
};
