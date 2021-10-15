import { Grow, Paper, TableCell, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StandingsResponse } from "../interfaces";
import { mainStandingListItemBoxStyling } from "./styles";
import noimage from "../images/noimage.png";
import { useState } from "react";

interface componentProps {
    index: number;
}

type StandingsProps = componentProps & StandingsResponse;

export const StandingListItem: React.FC<StandingsProps> = ({ note, stats, team, index }) => {
    /**
     * A logica abaixo foi implementada para suprir alguns times que não tem imagem.
     */
    let teamImage = team.logos ? team.logos[0].href : noimage;
    let imageAlt = team.logos ? team.logos[0].alt : "";

    let winCount = stats.find((current) => current.name === "wins");
    let lossCount = stats.find((current) => current.name === "losses");
    let tieCount = stats.find((current) => current.name === "ties");
    let gamesPlayedCount = stats.find((current) => current.name === "gamesPlayed");

    return (
        <Grow in={true} timeout={{ enter: index * 200 }}>
            <TableRow key={index} sx={mainStandingListItemBoxStyling}>
                <TableCell className="left-side">
                    <img src={teamImage} alt={imageAlt} />
                    <Box className="team-title">
                        <Typography className="team-name">{team.displayName}</Typography>
                        <Typography className="team-abbr">{team.abbreviation}</Typography>
                    </Box>
                </TableCell>
                <TableCell align="right">{winCount?.value}</TableCell>
                <TableCell align="right">{tieCount?.value}</TableCell>
                <TableCell align="right">{lossCount?.value}</TableCell>
                <TableCell align="right">{gamesPlayedCount?.value}</TableCell>
            </TableRow>
        </Grow>
    );
};
export default StandingListItem;
