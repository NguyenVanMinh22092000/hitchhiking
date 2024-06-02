import ThemeMgr from '@cores/ThemeMgr';

const ThemeInstance = ThemeMgr.getInstance();

export const setWebTheme = (...args) => ThemeInstance.setWebTheme(...args);
export const getWebTheme = (...args) => ThemeInstance.getWebTheme(...args);

export const getWebMode = (...args) => ThemeInstance.getWebMode(...args);

export const getWebModeInfo = (...args) => ThemeInstance.getWebModeInfo(...args);
