import { Dialog, DialogTitle, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { mainHomeBoxStyling } from "./styles/Home";
import { useEffect, useState } from "react";
import { Item } from "../components";
import useLeagues from "../hooks/useLeagues";
import useStanding from "../hooks/useStandings";

interface Props {}

export const Home: React.FC<Props> = () => {
    const [standingKey, setStandingKey] = useState("");
    const { leaguesTasks, getAllLeagues } = useLeagues();
    const { standingTasks, getStanding } = useStanding(standingKey);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        console.log(standingKey);
        getAllLeagues();
        getStanding(standingKey);
    }, [getAllLeagues, getStanding, standingKey]);

    return (
        <Box sx={mainHomeBoxStyling}>
            <Paper className="main-paper" elevation={5}>
                {leaguesTasks?.data.map((element, index) => {
                    if (index < 10)
                        return (
                            <Item
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
                    return null;
                })}
            </Paper>
            <Dialog open={dialogOpen}>
                <DialogTitle>Test</DialogTitle>
                <Typography>{standingTasks?.data.name}</Typography>
                <Typography>{standingTasks?.data.abbreviation}</Typography>
                <Typography>{standingTasks?.data.seasons}</Typography>
                {standingTasks?.data.standings.map((element, index) => {
                    return console.log(element);
                })}
                <Typography></Typography>
            </Dialog>
        </Box>
    );
};
export default Home;
