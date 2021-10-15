import { SxProps, Theme } from "@mui/system";

export const mainHomeBoxStyling: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "bold",

    ".main-paper": {
        boxShadow: "inset 0 0 10px #bbb",
        borderRadius: "2em",
        display: "flex",
        flexDirection: "column",
        padding: "2em 6em",
        margin: "4em 0",
    },
};

export default mainHomeBoxStyling;
