import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StandingsTeam } from "../interfaces";
import { mainStandingListItemBoxStyling } from "./styles";
import noimage from "../images/noimage.png";

export const StandingListItem: React.FC<StandingsTeam> = ({
    abbreviation,
    id,
    displayName,
    isActive,
    location,
    logos,
    name,
    shortDisplayName,
    uid,
}) => {
    /**
     * A logica abaixo foi implementada para suprir alguns times que não tem imagem.
     */
    let teamImage = logos ? logos[0].href : noimage;
    let imageAlt = logos ? logos[0].alt : "";

    return (
        <Box sx={mainStandingListItemBoxStyling}>
            <Paper className="main-paper" elevation={5}>
                <img src={teamImage} alt={imageAlt} />
                <Box>
                    <Box display="flex">
                        <Typography variant="h6" fontWeight="300" className="team-name">
                            {displayName}
                        </Typography>
                    </Box>
                    <Typography>{abbreviation}</Typography>
                </Box>
            </Paper>
        </Box>
    );
};
export default StandingListItem;
