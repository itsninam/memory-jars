export const getPluralSuffix = (count, label) => {
  return count > 1 || count == 0 ? ` ${label}s` : ` ${label}`;
};
