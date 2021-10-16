import {
    Dialog,
    DialogContent,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { mainHomeBoxStyling, mainDialogStyling } from "./styles";
import { useEffect, useState } from "react";
import { LeagueItem, StandingListItem } from "../components";
import useLeagues from "../hooks/useLeagues";
import useStanding from "../hooks/useStandings";

interface Props {}
export const Home: React.FC<Props> = () => {
    /**
     * Pega o ID correspondente ao item da lista e guarda o seu ID
     * para ser usado no [ENDPOINT] /leagues/{id}/standings
     */
    const [standingKey, setStandingKey] = useState("");

    /**
     * é responsável por abrir e fechar a tela de standings
     */
    const [dialogOpen, setDialogOpen] = useState(false);

    /**
     * Lista de todas as Leagues disponíveis na API, recebida no useEffect()
     */
    const { leaguesTasks, getAllLeagues } = useLeagues();

    /**
     * Lista de todos os times com todas as suas informações
     * o diretório de interfaces contém todos os seus respectivos returns
     */
    const { standingTasks, getStanding } = useStanding(standingKey);
    const [loading, setLoading] = useState(true);

    const handleClose = () => {
        setDialogOpen(false);
    };

    /**
     * Realiza a execução de todos requests que a página necessita e mantém atualizado.
     */
    useEffect(() => {
        console.log(standingKey);
        getAllLeagues();
        getStanding(standingKey).then(() => {
            setLoading(false);
        });
    }, [getAllLeagues, getStanding, standingKey]);

    return (
        <Box sx={mainHomeBoxStyling}>
            <Paper className="main-paper" variant="outlined">
                <Typography variant="h3" fontWeight="200" textAlign="right">
                    Classificação
                </Typography>
                <Typography variant="body1" fontWeight="300" textAlign="right">
                    Escolha uma liga para exibir seus respectivos times e classificações
                </Typography>
                {/* Mapeia todos as Leagues e retorna um Component Item para cada uma delas */}
                {leaguesTasks?.data.map((element, index) => {
                    return (
                        <LeagueItem
                            index={index}
                            key={index}
                            onClick={() => {
                                setStandingKey(element.id);
                                setDialogOpen(true);
                                setLoading(true);
                            }}
                            id={element.id}
                            abbr={element.abbr}
                            logos={element.logos}
                            name={element.name}
                            slug={element.slug}
                        />
                    );
                })}
            </Paper>
            <Dialog open={dialogOpen} maxWidth="xl" onClose={handleClose} sx={mainDialogStyling}>
                <DialogTitle className="dialog-window-title">
                    {loading ? (
                        "Carregando informações da liga..."
                    ) : (
                        <Box className="title-box">
                            <span className="league-name-prefix">Times da liga </span>
                            <span className="league-bigname">{standingTasks?.data.name}</span>{" "}
                            <span className="league-title-abbr">
                                {standingTasks?.data.abbreviation}
                            </span>
                        </Box>
                    )}
                </DialogTitle>
                <DialogContent className="dialog-content">
                    {/* Abre uma janela contendo todos os elementos de certa liga */}
                    <TableContainer className="table-container">
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
                                </TableRow>
                            </TableHead>
                            <TableBody className="table-body">
                                {/* Animação de loading enquanto os fetchs estão sendo realizados */}
                                {loading ? <Box className="loading-animation" /> : null}
                                {standingTasks?.data.standings.map((element, index, array) => {
                                    return loading ? null : (
                                        <StandingListItem
                                            iterationArray={array}
                                            index={index}
                                            key={index}
                                            note={element.note}
                                            team={element.team}
                                            stats={element.stats}
                                        />
                                    );
                                })}
                            </TableBody>
                            <TableFooter className="table-footer">
                                <Box>
                                    <Typography>P - Pontos</Typography>
                                    <Typography>J - Jogos</Typography>
                                </Box>
                                <Box>
                                    <Typography>V - Vitórias</Typography>
                                    <Typography>SG - Saldo de Gols</Typography>
                                </Box>
                                <Box className="colorinfo-box">
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
                                </Box>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </DialogContent>
            </Dialog>
        </Box>
    );
};
export default Home;
