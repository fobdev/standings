import { SxProps, Theme } from "@mui/system";

export const mainStandingListItemBoxStyling: SxProps<Theme> = {
    /**
     * Efeitos de botão, porém não clicável
     */
    cursor: "pointer",
    "&:hover": {
        background: "#eee",
    },
    ".left-side": {
        display: "flex",
        minWidth: "20vw",
        alignContent: "center",
        columnGap: "1em",
        ".qualifiers, .eliminations": {
            width: "2px",
            maxHeight: "100%",
        },
        ".qualifiers": {
            backgroundColor: "green",
        },
        ".eliminations": {
            backgroundColor: "red",
        },
        ".aligner": {
            marginLeft: "2px",
        },
        ".team-title": {
            display: "inherit",
            columnGap: ".5em",

            /**
             * Responsável por limitar o tamanho do nome dos times
             * ex: normal: Estudiantes de La Plata
             *     textOverflow: Estudiantes de La Pl...
             *
             * Porém, quando o usuário selecionar, irá receber o nome completo,
             * Estudiantes de La Plata, no clipboard.
             */
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

        /**
         * Logo dos times
         */
        img: {
            width: "24px",
            height: "24px",
        },
    },
};

export default mainStandingListItemBoxStyling;
