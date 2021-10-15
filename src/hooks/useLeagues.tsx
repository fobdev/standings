import { useCallback, useState } from "react";
import { Leagues } from "../interfaces";
import { LeaguesService } from "../services";

export const useLeagues = () => {
    const [leaguesTasks, setLeagueTasks] = useState<Leagues>();

    // useCallback para mudar apenas quando a depenência é mudada
    const getAllLeagues = useCallback(async () => {
        const { status, data } = await LeaguesService.getAll();
        if (status !== 200) throw new Error();
        setLeagueTasks(data);
    }, []);

    return {
        leaguesTasks,
        getAllLeagues,
    };
};

export default useLeagues;
