import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StandingsTeam } from "../interfaces";
import { mainStandingListItemBoxStyling } from "./styles";

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
    return (
        <Box sx={mainStandingListItemBoxStyling}>
            <Paper className="main-paper" elevation={5}>
                {/* A linha abaixo é uma forma de passar por alguns times que não contém logo na API */}
                {logos ? <img src={logos[0].href} alt={logos[0].alt} /> : null}
                <Box>
                    <Box display="flex">
                        <Typography variant="h6" fontWeight="300" className="team-name">
                            {shortDisplayName}
                        </Typography>
                        <Typography fontWeight="200" alignSelf="end">
                            {location}
                        </Typography>
                    </Box>
                    <Typography>{abbreviation}</Typography>
                </Box>
            </Paper>
        </Box>
    );
};
export default StandingListItem;
