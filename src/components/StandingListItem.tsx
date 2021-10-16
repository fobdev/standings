import { Grow, Paper, TableCell, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StandingsResponse } from "../interfaces";
import { mainStandingListItemBoxStyling } from "./styles";
import noimage from "../images/noimage.png";

interface componentProps {
    index: number;
    iterationArray: Array<any>;
}

type StandingsProps = componentProps & StandingsResponse;

export const StandingListItem: React.FC<StandingsProps> = ({
    note,
    stats,
    team,
    index,
    iterationArray,
}) => {
    /**
     * A logica abaixo foi implementada para suprir alguns times que não tem imagem.
     */
    let teamImage = team.logos ? team.logos[0].href : noimage;
    let imageAlt = team.logos ? team.logos[0].alt : "";

    let winCount = stats.find((current) => current.name === "wins");
    let lossCount = stats.find((current) => current.name === "losses");
    let gamesPlayedCount = stats.find((current) => current.name === "gamesPlayed");
    let pointsCount = stats.find((current) => current.name === "points");
    let pointsForCount = stats.find((current) => current.name === "pointsFor");
    let pointDifferentialCount = stats.find((current) => current.name === "pointDifferential");

    return (
        <Grow in={true} timeout={{ enter: index * 100 }}>
            <TableRow key={index} sx={mainStandingListItemBoxStyling}>
                <TableCell className="left-side">
                    {/* Todos os elementos com índice maior que 4 ganham a cor de classificação */}
                    {index + 1 <= 4 ? <Box className="qualifiers" /> : null}

                    {/* Todos os elementos 4 índices menores que o tamanho do array da call, recebem a cor de rebaixamento. */}
                    {index >= iterationArray.length - 4 ? <Box className="eliminations" /> : null}

                    {/* div de alinhamento, visto que os dois div acima deixariam o layout desalinhado */}
                    {index + 1 <= iterationArray.length - 4 && index >= 4 ? (
                        <Box className="aligner" />
                    ) : null}

                    <Typography className="position">
                        {index + 1 <= 9 ? `  ${index + 1}` : index + 1}
                    </Typography>
                    <img src={teamImage} alt={imageAlt} />
                    <Box className="team-title">
                        <Typography className="team-name">{team.displayName}</Typography>
                        <Typography className="team-abbr">{team.abbreviation}</Typography>
                    </Box>
                </TableCell>
                <TableCell align="right">{pointsCount?.displayValue}</TableCell>
                <TableCell align="right">{gamesPlayedCount?.displayValue}</TableCell>
                <TableCell align="right">{winCount?.displayValue}</TableCell>
                <TableCell align="right">{pointDifferentialCount?.displayValue}</TableCell>
                <TableCell align="right">{pointsForCount?.displayValue}</TableCell>

                {/* <TableCell align="right">P</TableCell>
                <TableCell align="right">J</TableCell>
                <TableCell align="right">V</TableCell>
                <TableCell align="right">SG</TableCell>
                <TableCell align="right">F</TableCell> */}
            </TableRow>
        </Grow>
    );
};
export default StandingListItem;
