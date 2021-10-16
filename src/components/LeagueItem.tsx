import { Box } from "@mui/system";
import { Typography, Button, Grow } from "@mui/material";
import * as React from "react";
import { LeaguesData } from "../interfaces";
import { mainButtonStyling } from "./styles";

interface componentProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    index: number;
}

type Props = componentProps & LeaguesData;
export const LeagueItem: React.FC<Props> = ({ id, logos, abbr, name, slug, onClick, index }) => {
    return (
        <Grow in={true} timeout={{ enter: (index % 5) * 500 }}>
            <Button sx={mainButtonStyling} onClick={onClick} disableRipple>
                <img src={logos.light} alt="League Logo" />
                <Box className="title-box">
                    <Typography className="title-name">{name}</Typography>
                    <Typography className="title-abbr">{abbr}</Typography>
                </Box>
            </Button>
        </Grow>
    );
};

export default LeagueItem;
