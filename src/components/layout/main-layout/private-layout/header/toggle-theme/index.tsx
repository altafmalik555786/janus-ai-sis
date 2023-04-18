import { useStore } from "@stores/root-store";
import { LOWER_DARK_HYPEN_THEME, LOWER_GREY_HYPEN_THEME, LOWER_LIGHT_HYPEN_THEME, LOWER_THEME, LOWER_TOKEN } from "@utils/const";
import { Radio } from "antd";
import { memo, useEffect, useState } from "react";
import style from "./style.module.scss";

export interface changeThemePropsTypes {
  isChangeTheme?: boolean;
}

const ThemeToggleBtn = ( {isChangeTheme = false} : changeThemePropsTypes ) => {
  const [value, setValue] = useState(localStorage.getItem(LOWER_THEME) ||  LOWER_LIGHT_HYPEN_THEME);

  const {
    theme: { changeTheme, updateDefaultTheme},
  } = useStore(null);


  const onChange = async (e) => {
    changeTheme(e.target.value);
    setValue(e.target.value)
    const payload = {
      oldThemeName: localStorage.getItem(LOWER_THEME),
      newThemeName: e.target.value,
  }
    localStorage.setItem(LOWER_THEME, e.target.value)
    isChangeTheme && await updateDefaultTheme(payload)
  };

  useEffect(() => {
    changeTheme(localStorage.getItem(LOWER_THEME) || LOWER_LIGHT_HYPEN_THEME)
  }, [])
  

  return (
      <Radio.Group className={style.radioThemeSelecting} onChange={onChange} defaultValue={localStorage.getItem(LOWER_THEME)} value={value}>
        <Radio className={style.lightTheme} value={LOWER_LIGHT_HYPEN_THEME}></Radio>
        <Radio className={style.greyTheme} value={LOWER_GREY_HYPEN_THEME}></Radio>
        <Radio className={style.darkTheme} value={LOWER_DARK_HYPEN_THEME}></Radio>
      </Radio.Group>
  );
};

export default memo(ThemeToggleBtn);
