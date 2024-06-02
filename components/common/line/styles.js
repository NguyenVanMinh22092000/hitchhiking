export const styles = ({ palette }) => ({
    line: {
        ...Object.fromEntries(Object.keys(palette).map(color => {
            return [`&.${color}`, {
                background: palette[color][100],
            }]
        })),
    },
});