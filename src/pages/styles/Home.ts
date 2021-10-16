import { SxProps, Theme } from "@mui/system";

export const mainHomeBoxStyling: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "bold",

    ".main-paper": {
        borderRadius: "2em",
        display: "flex",
        flexDirection: "column",
        padding: "2em 6em",
        margin: "4em 0",
    },
};

export const mainDialogStyling: SxProps<Theme> = {
    ".dialog-window-title": {
        ".title-box": {
            ".league-bigname": {
                fontSize: "1.4em",
            },
            ".league-title-abbr": {
                fontSize: ".8em",
                fontWeight: 300,
                color: "#bbb",
            },

            "@media (max-width: 700px)": {
                ".league-name-prefix": {
                    display: "none",
                },
            },
        },
    },
    ".dialog-content": {
        ".teams-table": {
            "@media (max-width: 700px)": {
                ".sg-count, .gp-count": {
                    display: "none",
                },
            },
            "@media (max-width: 560px)": {
                ".team-title": {
                    ".team-abbr": {
                        display: "none",
                    },

                    ".team-name": {
                        display: "none",
                    },
                    ".team-shortname": {
                        display: "box",
                    },
                },
            },
            "@media (min-width: 560px)": {
                ".team-shortname": {
                    display: "none",
                },
            },
        },
    },
};
