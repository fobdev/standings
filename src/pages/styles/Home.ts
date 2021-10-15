import { SxProps, Theme } from "@mui/system";

export const mainHomeBoxStyling: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    maxHeight: "100%",
    fontWeight: "bold",

    ".main-paper": {
        display: "flex",
        flexDirection: "column",
        padding: "2em",
        margin: "4em 0",
    },
};

export default mainHomeBoxStyling;
