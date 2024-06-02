import { createTheme } from "@mui/material";
import { alpha as muAlpha } from '@mui/system';

// import { getCustomColor } from "@utils/StyleUtils";
import { cloneDeep, isObject } from "@utils/Utils";

const toastKeyColor = ['info', 'success', 'warning', 'error'];

const toastOverrightStyleId = 'custom-toastity-color-style';

export const defaultColorBases = [
    ['primary', '#3C5569'],
    ['agency', '#3C5569'],
    ['purple', '#a540b8'],
    ['error', '#F00023', '#cc2121'],
    ['warning', '#fea220', '#eb7500'],
    ['success', '#009343', '#069B00'],
    ['info', '#1468EE', '#2B50EA'],
    ['white', '#ffffff'],
    ['black', '#000000'],
    ['menu', '#3C5569'],
    ['violet', '#6c63ff'],
    ['pink', '#e82a8f'],
    ['turquoise', '#57bfdb'],
    ['lightPink', '#f0557f'],
    ['grey', '#3b5998'],
    ['skyBlue', '#0868fe'],
    ['lightBlue', '#229fda'],
    ['darkGreen', '#10a37f'],
];

const mappingColorBase = colorBase => Object.fromEntries(colorBase.map(([colorName, colorMain]) => [colorName, {
    main: colorMain,
    [10]: muAlpha(colorMain, 0.01),
    [30]: muAlpha(colorMain, 0.03),
    [50]: muAlpha(colorMain, 0.05),
    [160]: muAlpha(colorMain, 0.16),
    [240]: muAlpha(colorMain, 0.24),
    [250]: muAlpha(colorMain, 0.25),
    [320]: muAlpha(colorMain, 0.32),
    [480]: muAlpha(colorMain, 0.48),
    [540]: muAlpha(colorMain, 0.54),
    [640]: muAlpha(colorMain, 0.64),
    ...Object.fromEntries(Array.from({ length: 9 }).map((_, index) => [
        `${index + 1}00`, muAlpha(colorMain, (index + 1) / 10)
    ])),
}]));

export const defaultThemeColor = mappingColorBase(defaultColorBases);

const getCustomTheme = (colorBase) => createTheme({
    palette: {
        background: {
            default: '#fbfbfc',
            primary: '#EBF0F0',
            ...Object.fromEntries(colorBase.reduce((bgs, color) => {
                if (color[2]) bgs.push([color[0], `linear-gradient(to bottom, ${color[1]}, ${color[2]})`]);
                return bgs;
            }, [])),
        },
        ...mappingColorBase(colorBase),
        text: {
            primary: colorBase[0][1],
            plh: muAlpha(colorBase[0][1], 0.5),
        },
    },
});

const cleanRecentStyleTag = id => {
    const styleEl = document.getElementById(id);
    if (styleEl) styleEl.remove();
};

export default class ThemeMgr {

    static instance = null;
    static getInstance() {
        if (!ThemeMgr.instance) ThemeMgr.instance = new ThemeMgr();
        return ThemeMgr.instance;
    }

    static mode = 'dark';
    static modeInfo = {
        bg: defaultThemeColor.primary.main,
        cnt: defaultThemeColor.white.main,
        type: 'dark',
    };
    static colorBase = [...defaultColorBases];
    static theme = getCustomTheme(defaultColorBases);

    setWebTheme = (data) => {
        if (isObject(data)) {
            const { mode, palette } = data;
            if (palette) {
                let styleToast = '', styleEditor = '', primaryColor;
                Object.keys(palette).forEach(key => {
                    let curData = palette[key];
                    const idx = ThemeMgr.colorBase.findIndex(i => i[0] === key);
                    if (idx > -1) {
                        // curData = getCustomColor(curData);
                        if (toastKeyColor.includes(key)) styleToast += `--toastify-color-${key}: ${curData} !important;`;
                        if (key === 'primary') primaryColor = curData;
                        ThemeMgr.colorBase[idx][1] = curData;
                    }
                });
                cleanRecentStyleTag(toastOverrightStyleId);
                document.head.insertAdjacentHTML('beforeend', `
                    <style id="${toastOverrightStyleId}">
                        :root {
                            ${styleToast}
                            --toastify-color-transparent: rgba(255, 255, 255, 0.8) !important;
                            --toastify-color-progress-dark: #a540b8 !important; 
                        }
                        ${primaryColor && `
                            ::-webkit-scrollbar-thumb:hover {
                                background: ${primaryColor};
                            }
                        `}
                    </style>
                `);
            }

            if (mode) {
                const _mode = cloneDeep(mode);
                if (_mode.cnt) _mode.cnt = getCustomColor(_mode.cnt);
                ThemeMgr.modeInfo = _mode;
                ThemeMgr.mode = _mode?.type || 'dark';
            }
        } else {
            ThemeMgr.colorBase = [...defaultColorBases];
        }
        ThemeMgr.theme = getCustomTheme(ThemeMgr.colorBase);
    }

    getWebTheme = () => ThemeMgr.theme;

    getWebMode = () => ThemeMgr.mode;

    getWebModeInfo = () => ThemeMgr.modeInfo;

}