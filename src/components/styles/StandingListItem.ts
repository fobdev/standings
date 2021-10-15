import { SxProps, Theme } from "@mui/system";

export const mainStandingListItemBoxStyling: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    width: "50em",
    ".main-paper": {
        display: "flex",
        columnGap: "1em",
        padding: ".2em",

        ".team-name": {
            alignSelf: "center",
        },
        ".team-name-abbrev": {
            alignSelf: "center",
            marginLeft: ".4em",
        },

        img: {
            width: "2em",
            height: "2em",
        },

        cursor: "pointer",
        userSelect: "none",
        "&:hover": {
            background: "#eee",
        },
    },
};

export default mainStandingListItemBoxStyling;
