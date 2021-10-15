import { useCallback, useState } from "react";
import { Standings } from "../interfaces";
import { StandingsService } from "../services/StandingsService";

export const useStanding = () => {
    const [standingTasks, setStandingTasks] = useState<Standings>();

    // useCallback para mudar apenas quando a depenência é mudada
    const getStanding = useCallback(async () => {
        const { status, data } = await StandingsService.getAll();
        if (status !== 200) throw new Error();
        setStandingTasks(data);
    }, []);

    return {
        standingTasks,
        getStanding,
    };
};

export default useStanding;
