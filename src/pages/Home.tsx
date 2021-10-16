import {
    Dialog,
    DialogContent,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { mainHomeBoxStyling } from "./styles/Home";
import { useEffect, useState } from "react";
import { Item, StandingListItem } from "../components";
import useLeagues from "../hooks/useLeagues";
import useStanding from "../hooks/useStandings";

interface Props {}

export const Home: React.FC<Props> = () => {
    const [standingKey, setStandingKey] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);
    const { leaguesTasks, getAllLeagues } = useLeagues();
    const { standingTasks, getStanding } = useStanding(standingKey);
    const [loading, setLoading] = useState(true);

    const handleClose = () => {
        setDialogOpen(false);
    };

    useEffect(() => {
        console.log(standingKey);
        getAllLeagues();
        getStanding(standingKey).then(() => {
            setLoading(false);
        });
    }, [getAllLeagues, getStanding, standingKey]);

    return (
        <Box sx={mainHomeBoxStyling}>
            <Paper className="main-paper">
                <Typography variant="h3" fontWeight="200" textAlign="center">
                    Classificação de Ligas
                </Typography>
                <Typography variant="h6" fontWeight="400" textAlign="center">
                    Selecione uma liga para verificar a classificação de seus times.
                </Typography>

                {/* Mapeia todos as Leagues e retorna um Component Item para cada uma delas */}
                {leaguesTasks?.data.map((element, index) => {
                    return (
                        <Item
                            index={index}
                            key={index}
                            onClick={() => {
                                setStandingKey(element.id);
                                setDialogOpen(true);
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
            <Dialog open={dialogOpen} maxWidth="xl" onClose={handleClose}>
                <DialogTitle>
                    Times da liga{" "}
                    <span style={{ fontSize: "1.4em" }}>{standingTasks?.data.name}</span>{" "}
                    <span style={{ fontSize: ".8em", fontWeight: 300, color: "#bbb" }}>
                        {standingTasks?.data.abbreviation}
                    </span>
                </DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
                    {/* Abre uma janela contendo todos os elementos de certa liga */}
                    <TableContainer>
                        <Table stickyHeader={true} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Time</TableCell>
                                    <TableCell align="right">Vitórias</TableCell>
                                    <TableCell align="right">Empates</TableCell>
                                    <TableCell align="right">Derrotas</TableCell>
                                    <TableCell align="right">Jogos</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* Animação de loading enquanto os fetchs estão sendo realizados */}
                                {loading ? (
                                    <Box
                                        sx={{
                                            border: "8px solid #f3f3f3",
                                            borderRadius: "50%",
                                            borderTop: "8px solid #3498db",
                                            width: "30px",
                                            height: "30px",
                                            animation: "spin 2s linear infinite",

                                            "@keyframes spin": {
                                                "0%": { transform: "rotate(0deg)" },
                                                "100%": { transform: "rotate(360deg)" },
                                            },
                                        }}
                                    />
                                ) : null}
                                {standingTasks?.data.standings.map((element, index) => {
                                    return (
                                        <StandingListItem
                                            index={index}
                                            key={index}
                                            note={element.note}
                                            team={element.team}
                                            stats={element.stats}
                                        />
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
            </Dialog>
        </Box>
    );
};
export default Home;
