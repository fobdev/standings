import { Grow, TableCell, TableRow, Typography } from "@mui/material";
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
     * A logica abaixo foi implementada para suprir times que não tem imagem.
     */
    let teamImage = team.logos ? team.logos[0].href : noimage;
    let imageAlt = team.logos ? team.logos[0].alt : "";

    /**
     * variáveis com retorno numérico de dados que estão armazenadas em um array de objects
     * dentro da API estao sendo resgatadas aqui.
     */
    let winCount = stats.find((current) => current.name === "wins");
    let gamesPlayedCount = stats.find((current) => current.name === "gamesPlayed");
    let pointsCount = stats.find((current) => current.name === "points");
    let pointsForCount = stats.find((current) => current.name === "pointsFor");
    let pointsAgainstCount = stats.find((current) => current.name === "pointsAgainst");
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
                        {/* 
                            quando o media query de 560px for acionado:
                            - abbreviation será removido da tela
                            - displayName será removido da tela.
                            - shortDisplayName será adicionado a tela.
                        */}
                        <Typography className="team-abbr">{team.abbreviation}</Typography>
                        <Typography className="team-name">{team.displayName}</Typography>
                        <Typography className="team-shortname">{team.shortDisplayName}</Typography>
                    </Box>
                </TableCell>
                {/* 
                    quando o media query de 700px for acionado:
                    - sg-count será removido da tela.
                    - gp-count será removido da tela.
                      gc-count será removido da tela.
                */}
                <TableCell align="right" className="points-count">
                    {pointsCount?.displayValue}
                </TableCell>
                <TableCell align="right" className="gamesplayed-count">
                    {gamesPlayedCount?.displayValue}
                </TableCell>
                <TableCell align="right" className="win-count">
                    {winCount?.displayValue}
                </TableCell>
                <TableCell align="right" className="sg-count">
                    {pointDifferentialCount?.displayValue}
                </TableCell>
                <TableCell align="right" className="gp-count">
                    {pointsForCount?.displayValue}
                </TableCell>
                <TableCell align="right" className="gc-count">
                    {pointsAgainstCount?.displayValue}
                </TableCell>

                {/* 
                
                padrão

                <TableCell>P</TableCell>
                <TableCell>J</TableCell>
                <TableCell>V</TableCell>
                <TableCell>SG</TableCell>
                <TableCell>GP</TableCell>
                <TableCell>GC</TableCell> */}
            </TableRow>
        </Grow>
    );
};
export default StandingListItem;
