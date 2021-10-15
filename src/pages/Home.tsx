import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
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
    const { leaguesTasks, getAllLeagues } = useLeagues();
    const { standingTasks, getStanding } = useStanding(standingKey);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleClose = () => {
        setDialogOpen(false);
    };

    useEffect(() => {
        console.log(standingKey);
        getAllLeagues();
        getStanding(standingKey);
    }, [getAllLeagues, getStanding, standingKey]);

    return (
        <Box sx={mainHomeBoxStyling}>
            <Paper className="main-paper" elevation={5}>
                <Typography variant="h3">Classificação de Ligas</Typography>
                <Typography variant="h6">
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
                    Times da liga {standingTasks?.data.name}{" "}
                    <span style={{ fontSize: ".8em", fontWeight: 300, color: "#bbb" }}>
                        {standingTasks?.data.abbreviation}
                    </span>
                </DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", rowGap: "1em" }}>
                    {/* Abre uma janela contendo todos os elementos de certa liga */}
                    {standingTasks?.data.standings.map((element, index) => {
                        return (
                            <StandingListItem
                                key={index}
                                displayName={element.team.displayName}
                                id={element.team.id}
                                isActive={element.team.isActive}
                                location={element.team.location}
                                logos={element.team.logos}
                                name={element.team.name}
                                shortDisplayName={element.team.shortDisplayName}
                                uid={element.team.uid}
                                abbreviation={element.team.abbreviation}
                            />
                        );
                    })}
                </DialogContent>
            </Dialog>
        </Box>
    );
};
export default Home;
