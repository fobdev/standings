import { SxProps, Theme } from "@mui/system";

export const mainStandingListItemBoxStyling: SxProps<Theme> = {
    ".left-side": {
        display: "flex",
        minWidth: "20vw",
        alignContent: "center",
        columnGap: "1em",
        ".team-title": {
            ".team-name": {
                alignSelf: "center",
            },
            ".team-abbr": {
                fontWeight: "500",
            },
        },
        img: {
            width: "3em",
            height: "3em",
        },
    },
};

export default mainStandingListItemBoxStyling;
