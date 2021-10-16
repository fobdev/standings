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
        ".qualifiers": {
            width: "2px",
            maxHeight: "100%",
            backgroundColor: "green",
        },
        ".eliminations": {
            width: "2px",
            maxHeight: "100%",
            backgroundColor: "red",
        },
        ".aligner": {
            marginLeft: "2px",
        },
        ".team-title": {
            display: "flex",
            columnGap: ".5em",
            ".team-name": {
                alignSelf: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "10em",
            },
            ".team-abbr": {
                fontWeight: "bold",
            },
        },
        img: {
            width: "24px",
            height: "24px",
        },
    },
};

export default mainStandingListItemBoxStyling;
