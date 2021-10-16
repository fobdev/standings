import { SxProps, Theme } from "@mui/system";

export const mainButtonStyling: SxProps<Theme> = {
    justifyContent: "left",
    color: "black",
    textAlign: "left",
    textTransform: "none",

    margin: ".5em 1em",
    padding: "1em",

    border: "1px solid #ccf",
    borderRadius: "5em",

    cursor: "pointer",
    userSelect: "none",
    ".title-box": {
        alignSelf: "center",
        ".title-name": { fontSize: "1.3em", fontWeight: "300" },
        ".title-abbr": { fontWeight: "bold" },
    },

    transition: "all 1s",
    "&:hover": {
        boxShadow: "inset 0 0 10px #bbb",
        background: "white",
    },

    img: {
        width: "4em",
        padding: ".2em",
    },
};
