const colors = ["#F87171", "#60A5FA", "#34D399", "#FBBF24", "#A78BFA"];

export const getUserColor = (username) => {
  const hash = username
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return colors[hash % colors.length];
};
