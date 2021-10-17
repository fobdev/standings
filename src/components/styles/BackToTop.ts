import { SxProps, Theme } from "@mui/system";

export const backToTopStyling: SxProps<Theme> = {
    /**
     * Fixa o botão no canto esquero da tela
     */
    position: "fixed",
    bottom: 0,
    left: 0,
    margin: "0 0 2em 2em",
    ".arrow": {
        width: "2em",
        height: "2em",
    },

    /**
     * Efeito de transparência
     */
    ".button": {
        backgroundColor: "rgba(255,255,255,0.3)",
        backdropFilter: "blur(10px)",
        border: "1px solid #dff",
    },
};
