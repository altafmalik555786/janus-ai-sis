import {
  CAP_ALL_SPORTS,
  CAP_BET_FAIR_GAMES,
  CAP_BET_LOCK,
  CAP_CRICKET,
  CAP_CURRENT_POSITIONS,
  CAP_DASHBOARD,
  CAP_GREYHOUND,
  CAP_HORSE_RACE,
  CAP_RESULTS,
  CAP_ROYALSTAR_CASINO, 
  CAP_SOCCER,
  CAP_TENNIS,
  CAP_TERMS_AND_CONDITIONS,
  CAP_USER,
  LOWER_DARK_HYPEN_THEME,
  LOWER_LIGHT_HYPEN_THEME,
  LOWER_THEME,
  MARKET_RULES,
} from "@utils/const";
import { constRoute } from "@utils/route";
import { useTheme } from "@utils/hooks/useTheme";
import { useEffect, useState } from "react";
import {
  greyThemeIcons,
  lightThemeIcons,
} from "@components/layout/main-layout/private-layout/Sidebar/json-data";

export const useMenusList = () => {
  const [menuItems, setmenuItems] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const MenuIcon =
      localStorage.getItem(LOWER_THEME) === LOWER_LIGHT_HYPEN_THEME ||
      localStorage.getItem(LOWER_THEME) === LOWER_DARK_HYPEN_THEME
        ? lightThemeIcons
        : greyThemeIcons;

    setmenuItems([
      {
        menu: [
          {
            name: CAP_DASHBOARD,
            icon: MenuIcon.dashboard,
            link: constRoute.dashboard,
          },
          {
            name: CAP_USER,
            icon: MenuIcon.users,
            link: constRoute.users,
          },
          {
            name: CAP_BET_LOCK,
            icon: MenuIcon.betLock,
            link: constRoute.betLocker,
          },
          {
            name: CAP_CURRENT_POSITIONS,
            icon: MenuIcon.currentPosition,
            link: constRoute.currentPosition,
          },
          {
            name: CAP_BET_FAIR_GAMES,
            icon: MenuIcon.betFairGames,
            link: constRoute.betFairGames,
          },
          {
            name: CAP_SOCCER,
            icon: MenuIcon.soccer,
            link: constRoute.soccer,
          },
          {
            name: CAP_TENNIS,
            icon: MenuIcon.tennis,
            link: constRoute.tennis,
          },
          {
            name: CAP_CRICKET,
            icon: MenuIcon.cricket,
            link: constRoute.cricket,
          },
          {
            name: CAP_HORSE_RACE,
            icon: MenuIcon.horseRace,
            link: constRoute.horseRace,
          },
          {
            name: CAP_GREYHOUND,
            icon: MenuIcon.greyhound,
            link: constRoute.greyhound,
          },
          {
            name: CAP_ROYALSTAR_CASINO,
            icon: MenuIcon.royalStarCasino,
            link: constRoute.royalStarCasino,
          },
          {
            name: CAP_ALL_SPORTS,
            icon: MenuIcon.allSports,
            link: constRoute.allSports,
          },
          {
            name: CAP_RESULTS,
            icon: MenuIcon.results,
            link: constRoute.results,
          },
          {
            name: MARKET_RULES,
            icon: MenuIcon.marketRules,
            link: constRoute.marketRules,
          },
          {
            name: CAP_TERMS_AND_CONDITIONS,
            icon: MenuIcon.termsAndConditions,
            link: constRoute.termsAndConditions,
          },
        ],
      },
    ]);
  }, [theme]);
  return menuItems;
};
