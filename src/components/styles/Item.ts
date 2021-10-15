import { SxProps, Theme } from "@mui/system";

export const mainItemBoxStyling: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    margin: "1em 0",
    img: {
        width: "5em",
        padding: ".2em",
    },

    cursor: "pointer",
    userSelect: "none",
    transition: "all .15s",

    ".main-box": {
        width: "100%",
        display: "flex",
        padding: "1em",
        columnGap: "1.5em",
        ".title-box": {
            display: "inherit",
            flexDirection: "column",
            ".title-abbr": {
                fontSize: "1em",
                fontWeight: "bold",
                textAlign: "left",
            },
            ".title-name": {
                fontSize: "2.5em",
                fontWeight: "200",
            },
        },
        "&:hover": {
            boxShadow: "1px 1px #bbb",
        },
    },
};

export default mainItemBoxStyling;
