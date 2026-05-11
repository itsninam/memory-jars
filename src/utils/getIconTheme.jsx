import JarSvg from "../pages/jars/sealedJars/jars/JarSvg";
import { jarThemes } from "../pages/jars/sealedJars/jars/config/jarThemes";
import { Fragment } from "react";
import { getCategory } from "./getCategory";

export const getThemeIcon = (theme) => {
  const themeObj = getCategory(theme, jarThemes);

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
