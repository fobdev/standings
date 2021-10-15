import { Box } from "@mui/system";
import { Typography, Paper, ButtonBase, Grow } from "@mui/material";
import * as React from "react";
import { LeaguesData } from "../interfaces";
import { mainItemBoxStyling } from "./styles";

interface componentProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    index: number;
}

type Props = componentProps & LeaguesData;
export const Item: React.FC<Props> = ({ id, logos, abbr, name, slug, onClick, index }) => {
    return (
        <Grow in={true} timeout={{ enter: index * 500 }}>
            <ButtonBase sx={mainItemBoxStyling} onClick={onClick}>
                <Paper elevation={5} className="main-box">
                    <img src={logos.light} alt="League Logo" />
                    <Box className="title-box">
                        <Typography variant="h2" className="title-name">
                            {name}
                        </Typography>
                        <Typography variant="h3" className="title-abbr">
                            {abbr}
                        </Typography>
                    </Box>
                </Paper>
            </ButtonBase>
        </Grow>
    );
};

export default Item;
