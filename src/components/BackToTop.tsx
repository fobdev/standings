import { useState } from "react";
import { IconButton, Slide } from "@mui/material";
import { Box } from "@mui/system";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { backToTopStyling } from "./styles";

/**
 * Botão no botão esquerdo da tela que scrolla até o topo.
 */
export const BackToTop: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        return document.documentElement.scrollTop > 20 ? setScrolled(true) : setScrolled(false);
    };

    const handleClick = () => {
        return window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box sx={backToTopStyling}>
            <Slide direction="up" in={scrolled}>
                <IconButton onClick={handleClick} className="button">
                    <ArrowUpwardIcon className="arrow" />
                </IconButton>
            </Slide>
        </Box>
    );
};
export default BackToTop;
