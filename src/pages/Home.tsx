import { Dialog, DialogTitle, Paper, Typography } from "@mui/material";
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

    useEffect(() => {
        console.log(standingKey);
        getAllLeagues();
        getStanding(standingKey);
    }, [getAllLeagues, getStanding, standingKey]);

    return (
        <Box sx={mainHomeBoxStyling}>
            <Paper className="main-paper" elevation={5}>
                {leaguesTasks?.data.map((element, index) => {
                    return (
                        <Item
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
            <Dialog open={dialogOpen}>
                <DialogTitle>Test</DialogTitle>
                <Typography>{standingTasks?.data.name}</Typography>
                <Typography>{standingTasks?.data.abbreviation}</Typography>
                <Typography>{standingTasks?.data.seasons}</Typography>
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
                <Typography></Typography>
            </Dialog>
        </Box>
    );
};
export default Home;
