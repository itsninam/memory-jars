import { jarThemes } from "../pages/jars/sealedJars/jars/jarThemes";
import JarSvg from "../pages/jars/sealedJars/jars/JarSvg";

const getTheme = (theme) => {
  return jarThemes.find((th) => th.label === theme);
};

export const getIconTheme = (theme) => {
  const themeObj = getTheme(theme);

  const Icon = themeObj?.icon;

  console.log(themeObj.backgroundColor, "heloo");

  return Icon ? (
    <div className="icon-container">
      <div className="jar-container">
        <JarSvg fill={themeObj.backgroundColor} id={themeObj.label} />
      </div>

      <Icon fill={themeObj.color} className="icon-theme" />
    </div>
  ) : null;
};

export const getIconColor = (theme) => {
  return getTheme(theme).color;
};
