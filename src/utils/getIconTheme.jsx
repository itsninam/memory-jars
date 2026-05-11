import JarSvg from "../pages/jars/sealedJars/jars/JarSvg";
import { jarThemes } from "../pages/jars/sealedJars/jars/jarThemes";
import { Fragment } from "react";

const getTheme = (theme) => {
  return jarThemes.find((th) => th.label === theme);
};

export const getThemeIconObj = (theme) => {
  return getTheme(theme);
};

export const getThemeIcon = (theme) => {
  const themeObj = getThemeIconObj(theme);

  const Icon = themeObj?.icon;

  return Icon ? (
    <>
      <div className="jar-container">
        <JarSvg fill={themeObj.backgroundColor} id={themeObj.label} />
      </div>

      <Icon fill={themeObj.color} className="icon-theme" />
    </>
  ) : null;
};
