import { SxProps, Theme } from "@mui/system";

export const mainHomeBoxStyling: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

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

    ".main-paper": {
        borderRadius: "2em",
        display: "flex",
        flexDirection: "column",
        padding: "2em 3vw",

        margin: "4em 0",

        ".leagues-list-paper": {
            display: "inherit",
            flexDirection: "column",
            justifySelf: "center",
            borderRadius: "2em",
            width: "100%",
            paddingTop: "1em",
            margin: "1em 0",
        },

        "@media (max-width: 530px)": {
            borderRadius: 0,
        },
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
            "@media (max-width: 800px)": {
                ".sg-count, .gp-count, .gc-count": {
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
                        display: "block",
                    },
                },
            },
            "@media (min-width: 560px)": {
                ".team-shortname": {
                    display: "none",
                },
            },
        },
        ".table-footer": {
            display: "flex",
            padding: "1em 1em 0 1em",
            span: {
                fontWeight: "bold",
            },

            ".colorinfo-box": {
                display: "inherit",
                alignItems: "left",
                flexDirection: "column",
                ".relegation-box, .classification-box": {
                    display: "flex",
                    alignItems: "center",
                    columnGap: ".5em",

                    ".classification-color": {
                        background: "green",
                        width: "1em",
                        height: "1em",
                    },
                    ".relegation-color": {
                        background: "red",
                        width: "1em",
                        height: "1em",
                    },
                },
            },
        },
    },
};
