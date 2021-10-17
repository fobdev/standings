import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { StandingListItem } from "../components";
import { Standings, Seasons } from "../interfaces";

interface Props {
    standingTasks: Standings | undefined;
    isLoading: boolean;
}

type ComponentProps = Props & Seasons;
export const StandingsTable: React.FC<ComponentProps> = ({
    standingTasks,
    isLoading,
    data,
    status,
}) => {
    return (
        <Table stickyHeader={true} size="small" className="teams-table">
            <TableHead>
                <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell align="right" className="points-count">
                        P
                    </TableCell>
                    <TableCell align="right" className="gamesplayed-count">
                        J
                    </TableCell>
                    <TableCell align="right" className="win-count">
                        V
                    </TableCell>
                    <TableCell align="right" className="sg-count">
                        SG
                    </TableCell>
                    <TableCell align="right" className="gp-count">
                        GP
                    </TableCell>
                    <TableCell align="right" className="gc-count">
                        GC
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody className="table-body">
                {/* Animação de loading enquanto os fetchs estão sendo realizados */}
                {isLoading ? (
                    <Box className="loading-animation" />
                ) : (
                    standingTasks?.data!.standings.map((element, index, array) => {
                        /**
                         * Alguns objetos não estao recebendo o valor de {element.note}
                         * portanto, o conteúdo desse objeto está fora do output.
                         *
                         * o check abaixo, se retirado o comment, mostra quais times contém
                         * uma cor dentro da API, e quais times não tem.
                         */

                        // if (element.note)
                        //     console.log(`${element.team.name} color: ${element.note.color}`);
                        // else console.log(` --- no note data for ${element.team.name}`);

                        /**
                         * Exibe todos os times liga correspondente a tab selecionada.
                         */
                        return isLoading ? null : (
                            <StandingListItem
                                iterationArray={array}
                                index={index}
                                key={index}
                                note={element.note}
                                team={element.team}
                                stats={element.stats}
                            />
                        );
                    })
                )}
            </TableBody>
            <TableFooter className="table-footer">
                <TableRow>
                    <TableCell>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Typography>
                                    <span>P</span> - Pontos
                                </Typography>
                                <Typography>
                                    <span>J</span> - Jogos
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    <span>V</span> - Vitórias
                                </Typography>
                                <Typography>
                                    <span>SG</span> - Saldo de Gols
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    <span>GP</span> - Gols Pró
                                </Typography>
                                <Typography>
                                    <span>GC</span> - Gols Contra
                                </Typography>
                            </Grid>
                            <Grid className="colorinfo-box" item>
                                <Box className="classification-box">
                                    <Box className="classification-color" />
                                    <Typography className="classification">
                                        Classificação
                                    </Typography>
                                </Box>
                                <Box className="relegation-box">
                                    <Box className="relegation-color" />
                                    <Typography className="relegation">Rebaixamento</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};
export default StandingsTable;
