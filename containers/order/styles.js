import { borderLines, borderRadiuses, boxShadows, cStyles, colors, commonClasses, fontWeights } from "@styles/theme";

export const styles = ({ palette, breakpoints }) => ({
    ...commonClasses({ breakpoints }),
    wrapper: {
        gap: 8,
        margin: '50px 0',
        ...cStyles.flexColumn,
        [breakpoints.down('lg')]: {
            margin: '40px 0',
        },
    },
    body: {
        gap: 64,
        margin: '30px 0',
        ...cStyles.flexColumn,
        background: boxShadows.base,
        borderRadius: borderRadiuses.main,
        border: borderLines.primary,
        [breakpoints.down('lg')]: {
            margin: '40px 0',
        },
    },
    address: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        margin: '20px 10px',
       
    },
    subAddress: {
        display: 'flex',
        gap: 20,
    },
    addressImage: {
        ...cStyles.flexCenter
    },
    addressBox: {
        display:'flex',
        flexDirection:'column',
        gap:10,
        cursor: 'pointer',
    },
    addressValue: {
        fontWeight: fontWeights.strong
    },
    drawerPaper: {
        width: '100px important!'
    },
});
