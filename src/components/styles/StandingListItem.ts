import { SxProps, Theme } from "@mui/system";

export const mainStandingListItemBoxStyling: SxProps<Theme> = {
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
        background: "#eee",
    },
    ".left-side": {
        display: "flex",
        minWidth: "20vw",
        alignContent: "center",
        columnGap: "1em",
        ".team-title": {
            display: "flex",
            columnGap: ".5em",
            ".team-name": {
                alignSelf: "center",
            },
            ".team-abbr": {
                fontWeight: "500",
            },
        },
        img: {
            width: "24px",
            height: "24px",
        },
    },
};

export default mainStandingListItemBoxStyling;
