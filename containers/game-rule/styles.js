import { cStyles, commonClasses } from "@styles/theme";

export const styles = ({ palette, breakpoints }) => ({
    ...commonClasses({ breakpoints }),
    wrapper: {
        gap: 8,
        margin: '72px 0',
        ...cStyles.flexColumn,
        [breakpoints.down('lg')]: {
            margin: '40px 0',
        },
    },
    content: {
        gap: 64,
        ...cStyles.flexColumn,
    },
});
