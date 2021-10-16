import { SxProps, Theme } from "@mui/system";

export const mainItemBoxStyling: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    userSelect: "none",
    transition: "all .15s",
    borderRadius: "5em",
    margin: "1em 0",

    ".main-box": {
        padding: "1em 2em",
        borderRadius: "5em",
        width: "100%",
        display: "flex",
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
            boxShadow: "inset 0 0 10px #bbb",
        },
    },

    img: {
        width: "5em",
        padding: ".2em",
    },
};

export default mainItemBoxStyling;
