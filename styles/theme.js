// 4px, 8px, 12px, 16px, 24px, 32px, 48px, 56px,...

import { createTheme } from '@mui/material';
import { alpha as muAlpha } from '@mui/system';

import { layoutSizes } from '@constants/Configs';

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

// value         |0px     600px    960px    1280px   1920px
// key           |xs      sm       md       lg       xl
// screen width  |--------|--------|--------|--------|-------->
// range         |   xs   |   sm   |   md   |   lg   |   xl

// input width: 520px

export const baseHeights = {
    box: '52.9px',
    base: '48px',
    baseNum: 48,
    primary: '41px',
    primaryNum: 41,
    avatar: '32px',
    avatarNum: 32,
};

export const colorBases = [
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

export const colors = {

    none: 'transparent',
    tbColor: '#EBF0F0',
    lineColor: 'rgba(60, 85, 105, 0.2)',
    bgColor: '#f5f6fa',
    bgDefault: 'rgba(73, 73, 73, 0.08)',
    button: 'rgba(73, 73, 73, 0.1)',

    white: '#ffffff',
    black: '#000000',

    base: '#7d7d7d',

    primary: '#E4F4C6',
    primaryLight: '#666666',
    primaryDim: '#808080',

    gray: '#cccccc',
    grayLight: '#eaeaea',
    grayDark: '#585d71',
    grayDim: '#9C9C9C',

    blue: '#1468EE',
    blueLight: '#57bfdb',
    blueLess: '#848c99',
    blueDim: '#616E82',
    blueGray: '#4a5b75',
    blueDark: '#404b5c',

    green: '#009343',
    greenLight: '#32c991',

    red: '#F00023',
    redLight: '#fb7b65',

    orange: '#fea220',
    orangeLight: '#e9bc5a',

    purple: '#a540b8',

};

export const filterColors = {
    call: 'rgb(233, 233, 233,0.1)',
    tag: 'rgba(38, 122, 255, 0.1)',
    business: 'rgba(255, 168, 80, 0.1)',
    tag_contact_category: 'rgba(50, 177, 98, 0.1)',
    tag_employee_category: 'rgba(76, 167, 80, 0.05)',
    tag_sort: ' rgba(165, 64, 184, 0.1)',
    employee_list: 'rgba(165, 64, 184, 0.1)',
    employee: 'rgba(233, 188, 90, 0.3)',
    tag_gender: 'rgba(85, 89, 109, 0.1)',
    disposition: 'rgba(233,188,90, 0.1)',
    provider: 'rgba(38, 122, 255, 0.1)',
    number_type: 'rgba(38, 122, 255, 0.1)',
    filter_contact: 'rgba(85, 89, 109, 0.1)',
    tag_status: 'rgba(251, 123, 101, 0.05)',
    tag_manager: 'rgba(233, 188, 90, 0.1)',
    sip_number: 'rgba(38, 122, 255, 0.1)',
    direction: 'rgba(38,122,255, 0.1)',
    hopper: 'rgba(233, 68, 64, 0.1)',
};
export const boxSinzings = {
    boxSizing: 'border-box',
};

export const positions = {
    absolute: 'absolute',
    relative: 'relative',
};
export const widths = {
    primary: "94.75%",
    oneHundred: '100%',
    box: '176px',
};
export const boxShadows = {

    base: 'rgba(125, 125, 125, 0.08)',
    baseHover: 'rgba(125, 125, 125, 0.2)',
    baseDark: 'rgba(125, 125, 125, 0.5)',
    baseBlack: 'rgba(125, 125, 125, 0.8)',
    baseLight: 'rgba(73, 73, 73, 0.16)',

    button: 'rgba(73, 73, 73, 0.08)',
    buttonHover: 'rgba(73, 73, 73, 0.2)',

    primary: 'rgba(73, 73, 73, 0.08)',
    primaryHover: 'rgba(73, 73, 73, 0.2)',
    primaryDark: 'rgba(73, 73, 73, 0.5)',
    primaryBlack: 'rgba(73, 73, 73, 0.8)',

    grayLight: 'rgb(233, 233, 233, 0.5)',
    grayLightHover: 'rgb(233, 233, 233,0.8)',
    grayDark: 'rgba(85, 89, 109, 0.5)',
    grayDarkHover: 'rgba(85, 89, 109, 0.8)',

    blue: 'rgba(38, 122, 255, 0.5)',
    blueHover: 'rgba(38, 122, 255, 0.8)',
    blueLight: 'rgba(87, 191, 219, 0.5)',
    blueLightHover: 'rgba(87, 191, 219, 0.8)',

    green: 'rgba(76, 167, 80, 0.5)',
    greenHover: 'rgba(76, 167, 80, 0.8)',

    orange: 'rgba(254, 162, 32, 0.5)',
    orangeHover: 'rgba(254, 162, 32, 0.8)',
    orangeLight: 'rgba(233, 188, 90, 0.5)',
    orangeLighthover: 'rgba(233, 188, 90, 0.8)',

    menu: 'rgba(29, 48, 80, 0.16)',
    main: 'rgba(30, 49, 80, 0.08)',
    mainBold: 'rgba(30, 49, 80, 0.32)',

    red: 'rgba(233, 68, 64, 0.5)',
    redHover: 'rgba(233, 68, 64, 0.8)',
    redLight: 'rgba(251, 123, 101, 0.5)',
    redLightHover: 'rgba(251, 123, 101, 0.8)',
    redBold: 'rgba(255, 89, 85, 0.32)',


    purple: 'rgba(165, 64, 184, 0.5)',
    purpleHover: 'rgba(165, 64, 184, 0.8)',

};

export const linearGradients = {

    green: 'linear-gradient(to bottom, #32c991, #4ca750)',
    greenV2: 'linear-gradient(to bottom ,#009343 ,#069B00)',
    white: 'linear-gradient(to bottom, #ffffff, #ffffff)',

    main: 'linear-gradient(to bottom, #1468EE, #2B50EA)',
    mainBlur: `linear-gradient(to bottom, ${muAlpha('#1468EE', 0.1)},${muAlpha('#2B50EA', 0.1)})`,

};

export const borderLines = {
    main: '1px solid #ccc',
    white: '1px solid #ffffff',
    bgColor: '1px solid #f5f6fa',
    primary: '1px solid rgba(73, 73, 73, 0.08)',
    cancel: '1px solid  rgba(38, 122, 255, 0.1)',
    custom: ({ size = 2, strokeSize = 4, color = '#3C5569', opacity = 'ff', rx = 6, ry = 6 } = {}) => `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='${rx}' ry='${ry}' stroke='%23${color.replace('#', '')}${opacity}' stroke-width='${size}' stroke-dasharray='${strokeSize}' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`,
    // custom: ({ size = 3, color = '#3C5569', opacity = 50 } = {}) => `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23${color.replace('#', '')}${opacity}' stroke-width='${size}' stroke-dasharray='8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
};

export const imgSizes = {
    icon: '20px',
    avatar: '32px',
    avatarLarge: '48px',
    button: '48px',
};

export const fontFamilys = {
    primary: 'Montserrat',
    HelveticaLight: 'HelveticaNeue Light',
    HelveticaBold: 'HelveticaNeue CondensedBold',
    HelveticaCondensedBlack: 'HelveticaNeue CondensedBlack',
};

export const fontWeights = {
    primary: '400',
    bold: '500',
    strong: '700',
};

export const borderRadiuses = {
    small: 4,
    main: 5,
    primary: 8,
    medium: 16,
    big: 24,
    layout: 16,
};

export const avatarColors = {
    A: 'rgb(45,69,99,0.5)',
    B: 'rgb(165,64,184,0.5)',
    C: 'rgb(233,68,64,0.5)',
    D: 'rgb(254,162,32,0.5)',
    E: 'rgb(76,167,80,0.5)',
    F: 'rgb(38,122,255,0.5)',
    G: 'rgb(73,73,73,0.5)',
    H: 'rgb(88,93,113,0.5)',
    I: 'rgb(251,123,101,0.8)',
    J: 'rgb(255,168,80,0.8)',
    K: 'rgb(233,188,90,0.8)',
    L: 'rgb(88,144,220,0.8)',
    M: 'rgb(87,191,219,0.8)',
    N: 'rgb(45,69,99,0.5)',
    O: 'rgb(165,64,184,0.5)',
    P: 'rgb(233,68,64,0.5)',
    Q: 'rgb(254,162,32,0.5)',
    R: 'rgb(76,167,80,0.5)',
    S: 'rgb(38,122,255,0.5)',
    T: 'rgb(73,73,73,0.5)',
    U: 'rgb(88,93,113,0.5)',
    V: 'rgb(251,123,101,0.8)',
    W: 'rgb(255,168,80,0.8)',
    X: 'rgb(233,188,90,0.8)',
    Y: 'rgb(88,144,220,0.8)',
    Z: 'rgb(87,191,219,0.8)',
    '+': 'rgb(189,189,189)',
};

export const roleColors = [
    '#2d4563', '#a540b8', '#e94440', '#fea220', '#4ca750',
    '#1468EE', '#3C5569', '#585d71', '#fb7b65', '#ffa850',
    '#e9bc5a', '#5890dc', '#57bfdb',
];

export const pkgColors = {
    trial: colors.grayDim,
    save1: colors.red,
    normal: colors.blue,
    pro: colors.blueLight,
    super: colors.purple,
    customize: colors.blue,
    omi_start: colors.green,
    omi_lite: colors.blueDim,
    omi_pro: colors.purple,
    omi_business: colors.orange,
    omi_advance: colors.red,
};

export const lineHeights = {
    small: '19.5px',
    big: '26.63px',
};
export const cStyles = {
    textEllipsis: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexColCenter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPrimary: {
        fontSize: 15,
        fontFamily: fontFamilys.primary,
        color: colors.primary,
    },
    textBiggerPrimary: {
        fontSize: 16,
        fontFamily: fontFamilys.primary,
        color: colors.primary,
    },
    textPrimaryDesktop: {
        fontSize: 22,
        fontFamily: fontFamilys.primary,
        color: colors.primary,
    },
    noneUserSelect: {
        WebkitTouchCallout: 'none', /* iOS Safari */
        WebkitUserSelect: 'none', /* Safari */
        KhtmlUserSelect: 'none', /* Konqueror HTML */
        MozUserSelect: 'none', /* Firefox */
        MsUserSelect: 'none', /* Internet Explorer/Edge */
        userSelect: 'none', /* Non-prefixed version, currently supported by Chrome and Opera */
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    flexRowCenter: {
        display: 'flex',
        alignItems: 'center',
    },
    noClickOutlineHighlight: {
        outline: 'none',
        WebkitTapHighlightColor: 'transparent',
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',
    },
    overlayAbsolute: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    wrapper: {
        minWidth: layoutSizes - 24,
        maxWidth: layoutSizes - 24,
        margin: `0 auto`,
        padding: '0 24px',
    },
    startJustify: 'flex-start',
};

export const textSizes = {
    text: [16, 500],
    textBold: [16, 700],
    medium: [20, 700],
};
export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
            '300': 301,
            '400': 401,
            '450': 451,
            '500': 501,
            '600': 601,
            '640': 641,
            '960': 961,
            '1024': 1025,
            '1280': 1281,
            '1440': 1441,
            '1920': 1921,
            '2440': 2441,
        },
    },
    spacing: [4, 8, 16, 24, 32, 48],
    palette: {
        background: {
            default: '#fbfbfc',
            primary: '#EBF0F0',
            info: 'linear-gradient(to bottom, #1468EE, #0035c7)',
            warning: 'linear-gradient(to bottom, #ffb300, #eb7500)',
            success: 'linear-gradient(to bottom, #009343, #069B00)',
            error: 'linear-gradient(to bottom, #F00023, #cc2121)',
        },
        ...Object.fromEntries([
            ['primary', '#3C5569'],
            ['error', '#F00023', '#cc2121'],
            ['warning', '#fea220', '#eb7500'],
            ['success', '#009343', '#069B00'],
            ['info', '#1468EE', '#2B50EA'],
            ['white', '#ffffff'],
            ['black', '#000000'],
            ['darkGreen', '#043E23'],
        ].map(([colorName, colorValue]) => [colorName, {
            main: colorValue,
            [10]: muAlpha(colorValue, 0.01),
            [30]: muAlpha(colorValue, 0.03),
            [50]: muAlpha(colorValue, 0.05),
            [160]: muAlpha(colorValue, 0.16),
            [240]: muAlpha(colorValue, 0.24),
            [250]: muAlpha(colorValue, 0.25),
            [320]: muAlpha(colorValue, 0.32),
            [480]: muAlpha(colorValue, 0.48),
            [540]: muAlpha(colorValue, 0.54),
            [640]: muAlpha(colorValue, 0.640),
            ...Object.fromEntries(Array.from({ length: 9 }).map((_, index) => [
                `${index + 1}00`, muAlpha(colorValue, (index + 1) / 10)
            ])),
        }])),
        text: {
            primary: '#3C5569',
            plh: 'rgba(39, 49, 80, 0.5)',
        },
    },
});


export const templateColors = [
    theme.palette.info.main,
    theme.palette.success.main,
    theme.palette.error.main,
    theme.palette.warning.main,
    colors.blueLight,
    theme.palette.primary.main,
];

const gapCommon = [4, 8, 16, 24, 32, 36, 48];
export const commonClasses = ({ breakpoints }) => ({
    cLayout: {
        minWidth: layoutSizes,
        maxWidth: layoutSizes,
        margin: `0 auto`,
        padding: '0 16px',
        [breakpoints.down('lg')]: {
            minWidth: '100%',
            maxWidth: '100%',
        },
    },
});
export const flexRowCommon = {
    ...Object.fromEntries(gapCommon.map(gap => [`row${gap}`, { gap, ...cStyles.flexRowCenter }])),
    rowBetween: {
        justifyContent: 'space-between',
        ...cStyles.flexRowCenter,
    },
};
export const flexColumnCommon = {
    ...Object.fromEntries(gapCommon.map(gap => [`col${gap}`, { gap, ...cStyles.flexColumn }])),
    colBetween: {
        justifyContent: 'space-between',
        ...cStyles.flexColumn,
    },
}