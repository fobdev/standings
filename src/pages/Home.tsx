import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
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
     * Responsável pela quantidade de elementos da lista são exibidos
     * na tela no momento, com um valor inicial de 5 e um incremento de
     * +5 por clique, informado na chamada dele.
     */
    const [loadedComponent, setLoadedComponent] = useState(5);

    /**
     * Lista de todas as Leagues disponíveis na API, recebida no useEffect()
     */
    const { leaguesTasks, getAllLeagues } = useLeagues();

    /**
     * Lista de todos os times com todas as suas informações
     * o diretório de interfaces contém todos os seus respectivos returns
     */
    const { standingTasks, getStanding } = useStanding(standingKey);

    /**
     * Muda o estado da animação de loading
     */
    const [loading, setLoading] = useState(true);

    /**
     * Verifica qual o index atual da leagueTasks, para não renderizar
     * a animação de loading quando já tem dados carregados.
     */
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClose = () => {
        setDialogOpen(false);
    };

    /**
     * Realiza a execução de todos requests que a página necessita e mantém atualizado.
     */
    useEffect(() => {
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
                <Paper className="leagues-list-paper" elevation={5}>
                    {leaguesTasks?.data.map((element, index) => {
                        if (index < loadedComponent)
                            return (
                                <LeagueItem
                                    index={index}
                                    key={index}
                                    onClick={() => {
                                        setStandingKey(element.id);
                                        setDialogOpen(true);

                                        /**
                                         * Verifica index duplicado, para não executar a animação de
                                         * loading quando já existir algo carregado.
                                         */
                                        if (currentIndex !== index) setLoading(true);
                                        setCurrentIndex(index);
                                    }}
                                    id={element.id}
                                    abbr={element.abbr}
                                    logos={element.logos}
                                    name={element.name}
                                    slug={element.slug}
                                />
                            );
                        /**
                         * Incrementa 5 elementos a cada clique do botão
                         */ else if (index === loadedComponent)
                            return (
                                <Button
                                    disableRipple
                                    sx={{ color: "#aaf" }}
                                    onClick={() => {
                                        setLoadedComponent(loadedComponent + 5);
                                    }}
                                >
                                    Carregar mais...
                                </Button>
                            );
                        else return null;
                    })}
                </Paper>
            </Paper>
            <Dialog open={dialogOpen} maxWidth="xl" onClose={handleClose} sx={mainDialogStyling}>
                <DialogTitle className="dialog-window-title">
                    {loading ? (
                        "Carregando informações da liga..."
                    ) : (
                        <Box className="title-box">
                            <span className="league-name-prefix">Classificações da liga </span>
                            <span className="league-bigname">{standingTasks?.data.name}</span>{" "}
                            <span className="league-title-abbr">
                                {standingTasks?.data.abbreviation}
                            </span>
                        </Box>
                    )}
                </DialogTitle>
                <DialogContent className="dialog-content">
                    {/* Abre uma janela contendo todos os elementos de certa liga */}
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
                            {loading ? (
                                <Box className="loading-animation" />
                            ) : (
                                standingTasks?.data.standings.map((element, index, array) => {
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
                                })
                            )}
                        </TableBody>
                        <TableFooter className="table-footer">
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
                        </TableFooter>
                    </Table>
                </DialogContent>
            </Dialog>
        </Box>
    );
};
export default Home;
