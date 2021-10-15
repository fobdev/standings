import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StandingsResponse } from "../interfaces";
import { mainStandingListItemBoxStyling } from "./styles";
import noimage from "../images/noimage.png";

export const StandingListItem: React.FC<StandingsResponse> = ({ note, stats, team }) => {
    /**
     * A logica abaixo foi implementada para suprir alguns times que não tem imagem.
     */
    let teamImage = team.logos ? team.logos[0].href : noimage;
    let imageAlt = team.logos ? team.logos[0].alt : "";

    return (
        <Box sx={mainStandingListItemBoxStyling}>
            <Paper className="main-paper" elevation={5}>
                <img src={teamImage} alt={imageAlt} />
                <Box>
                    <Box display="flex">
                        <Typography variant="h6" fontWeight="300" className="team-name">
                            {team.displayName}
                        </Typography>
                    </Box>
                    <Typography>{team.abbreviation}</Typography>
                </Box>
            </Paper>
        </Box>
    );
};
export default StandingListItem;
