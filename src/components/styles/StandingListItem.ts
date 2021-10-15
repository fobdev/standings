import { SxProps, Theme } from "@mui/system";

export const mainStandingListItemBoxStyling: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid orange",
    columnGap: "1em",
    ".main-paper": {
        display: "flex",
        // border: "1px solid red",
        columnGap: "1em",
        ".team-name": {
            alignSelf: "center",
        },
        img: {
            width: "4em",
        },
    },
};

export default mainStandingListItemBoxStyling;
