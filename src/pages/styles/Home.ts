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
        ".table-container": {
            ".teams-table": {
                ".table-body": {
                    ".loading-animation": {
                        border: "8px solid #f3f3f3",
                        borderRadius: "50%",
                        borderTop: "8px solid #bbe",
                        margin: "1em",
                        width: "30px",
                        height: "30px",
                        animation: "spin 2s linear infinite",

                        "@keyframes spin": {
                            "0%": { transform: "rotate(0deg)" },
                            "100%": { transform: "rotate(360deg)" },
                        },
                    },
                },
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
    },
};
