import { Grow, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StandingsResponse } from "../interfaces";
import { mainStandingListItemBoxStyling } from "./styles";
import noimage from "../images/noimage.png";

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
    return (
        <Grow in={true} timeout={{ enter: index * 100 }}>
            <Box sx={mainStandingListItemBoxStyling}>
                <Paper className="main-paper" elevation={5}>
                    <img src={teamImage} alt={imageAlt} />
                    <Box>
                        <Box display="flex">
                            <Typography variant="subtitle1" fontWeight="300" className="team-name">
                                {team.displayName}
                            </Typography>
                            <Typography className="team-name-abbrev" variant="subtitle2">
                                {team.abbreviation}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Grow>
    );
};
export default StandingListItem;
