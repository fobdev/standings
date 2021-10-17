import { SxProps, Theme } from "@mui/system";

export const mainHomeBoxStyling: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    /**
     * Component que contém o título de cima (Classificações, escolha uma liga...)
     */
    ".main-paper": {
        borderRadius: "2em",
        display: "flex",
        flexDirection: "column",
        padding: "2em 3vw",
        margin: "4em 0",

        /**
         * Component da lista de times, o que fica dentro do componente principal.
         */
        ".leagues-list-paper": {
            display: "inherit",
            flexDirection: "column",
            borderRadius: "2em",
            justifySelf: "center",
            paddingTop: "1em",
            margin: "1em 0",
            width: "100%",
        },

        /**
         * Remove bordas caso a tela for menor, para ter a impressao de um background
         */
        "@media (max-width: 530px)": {
            borderRadius: 0,
        },
    },

    /**
     * Animação de loading, durante o fetching de ligas.
     */
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
};

export const mainDialogStyling: SxProps<Theme> = {
    ".dialog-window-title": {
        ".title-box": {
            display: "flex",
            flexDirection: "column",
            ".league-bigname": {
                fontSize: "1.4em",
            },
            ".league-title-abbr": {
                fontSize: ".8em",
                fontWeight: 300,
                color: "#bbb",
            },
            ".date-lenght": {
                fontSize: ".8em",
                fontWeight: 300,
            },
            "@media (max-width: 700px)": {
                ".league-name-prefix": {
                    display: "none",
                },
                ".league-bigname": {
                    fontSize: "1em",
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
        "@media (max-width: 800px)": {
            padding: 0,
            margin: 0,
            ".main-tab-panel": {
                padding: 0,
            },
        },
    },
};
