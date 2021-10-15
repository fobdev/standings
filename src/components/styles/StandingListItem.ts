import { SxProps, Theme } from "@mui/system";

export const mainStandingListItemBoxStyling: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    width: "50em",
    columnGap: "1em",
    ".main-paper": {
        display: "flex",
        columnGap: "1em",
        padding: "1em",
        ".team-name": {
            alignSelf: "center",
        },
        img: {
            width: "4em",
        },
    },
};

export default mainStandingListItemBoxStyling;
