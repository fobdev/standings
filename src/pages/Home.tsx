// Material UI
import { Button, Dialog, DialogContent, DialogTitle, Paper, Tab, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TabContext, TabList, TabPanel } from "@mui/lab";
// Components
import { LeagueItem, StandingsTable } from "../components";
// Styles
import { mainHomeBoxStyling, mainDialogStyling } from "./styles";
// Hooks
import useLeagues from "../hooks/useLeagues";
import useStanding from "../hooks/useStandings";
import useSeasons from "../hooks/useSeasons";
// Interfaces
import { LeaguesData } from "../interfaces";
// React
import React, { useEffect, useState } from "react";

interface Props {}
export const Home: React.FC<Props> = () => {
    /**
     * Pega o ID correspondente ao item da lista e guarda o seu ID
     * para ser usado no [ENDPOINT] /leagues/{id}/standings
     */
    const [standingKey, setStandingKey] = useState("arg.1");

    /**
     * Lista de todas as Leagues disponíveis na API, recebida no useEffect()
     */
    const { leaguesTasks, getAllLeagues } = useLeagues();
    const { seasonTasks, getSeason } = useSeasons(standingKey);
    /**
     * Lista de todos os times com todas as suas informações
     * o diretório de interfaces contém todos os seus respectivos returns
     *
     * - setSeason seleciona o ano da lista
     *
     * - tabValue controla a posição do ponteiro na tab
     */
    const [season, setSeason] = useState(2021);
    const [tabValue, setTabValue] = useState("2021");
    const { standingTasks, getStanding } = useStanding(standingKey, season);

    /**
     * é responsável por abrir e fechar a tela de standings
     */
    const [dialogOpen, setDialogOpen] = useState(false);

    /**
     * Responsável pela quantidade de elementos da lista são exibidos
     * na tela no momento, com um valor inicial de 5 e um incremento de
     * +5 por clique, informado na chamada dele.
     */
    const [loadedComponent, setLoadedComponent] = useState(5);

    /**
     * Muda o estado da animação de loading dos elementos
     */
    const [loading, setLoading] = useState(true);
    const [leaguesLoading, setLeaguesLoading] = useState(true);

    /**
     * Verifica qual o index atual da leagueTasks, para não renderizar
     * a animação de loading quando já tem dados carregados.
     */
    const [currentIndex, setCurrentIndex] = useState(0);

    /**
     * Lida com a mudança de estado das tabs e altera os valores da lista.
     */
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setSeason(parseInt(newValue));
        setTabValue(newValue);
        setLoading(true);
    };

    /**
     * Lida com o fechamento da janela secundária.
     */
    const handleClose = () => {
        setDialogOpen(false);

        /**
         * Quando sair da tabela de ligas, reseta os valores para 2021.
         * motivo: existem listas de tabs menores, que podem causar erros
         * caso selecionadas se a anterior for de um valor que não existe na atual.
         */
        setTabValue("2021");
        setSeason(2021);
    };

    /**
     * Acionado quando clicado em algum item da lista de ligas.
     * @param element LeaguesData
     * @param index number
     */
    const handleLeagueItemClick = (element: LeaguesData, index: number) => {
        setStandingKey(element.id);
        setDialogOpen(true);

        /**
         * Verifica index duplicado, para não executar a animação de
         * loading quando já existir algo carregado.
         */
        if (currentIndex !== index) setLoading(true);
        setCurrentIndex(index);
    };

    /**
     *
     * Cálculo de data e retorna uma string.
     *
     * @param initialDate data inicial do seasonTasks.data.seasons da variavel season atual
     * @param endDate data final do seasonTasks.data.seasons da variavel season atual
     * @returns string (de [DIA_initial] de [MÊS_inicial] de [ANO_inicial]
     * até [DIA_final] de [MÊS_final] de [ANO_final])
     */
    const parseDateString = (initialDate: string, endDate: string) => {
        /**
         * Pega as datas iniciais e finais da seasonTasks
         */
        let date1 = new Date(initialDate);
        let date2 = new Date(endDate);

        /**
         * Localiza as datas para pt-BR no formato ([DIA] de [MÊS] de [ANO])
         */
        let date1String = date1.toLocaleDateString("pt-BR", { dateStyle: "long" });
        let date2String = date2.toLocaleDateString("pt-BR", { dateStyle: "long" });

        return `de ${date1String} até ${date2String}`;
    };

    /**
     * Realiza a execução de todos requests que a página necessita e mantém atualizado.
     */
    useEffect(() => {
        getAllLeagues().then(() => {
            setLeaguesLoading(false);
        });
        getStanding(standingKey, season).then(() => {
            setLoading(false);
        });
        getSeason(standingKey).then(() => setLoading(false));
    }, [getSeason, getAllLeagues, getStanding, standingKey, season]);

    return (
        <Box sx={mainHomeBoxStyling}>
            <Paper className="main-paper" variant="outlined">
                <Typography variant="h3" fontWeight="200" textAlign="right">
                    Classificações
                </Typography>
                <Typography variant="body1" fontWeight="300" textAlign="right">
                    Escolha uma liga para exibir seus respectivos times e suas classificações
                </Typography>

                {/* Mapeia todos as Leagues e retorna um Component Item para cada uma delas */}
                <Paper className="leagues-list-paper" elevation={8}>
                    {leaguesLoading ? (
                        <Box className="loading-animation" />
                    ) : (
                        leaguesTasks?.data!.map((element, index) => {
                            if (index < loadedComponent) {
                                return (
                                    <LeagueItem
                                        index={index}
                                        key={index}
                                        onClick={() => handleLeagueItemClick(element, index)}
                                        id={element.id}
                                        abbr={element.abbr}
                                        logos={element.logos}
                                        name={element.name}
                                        slug={element.slug}
                                    />
                                );

                                // Incrementa 5 elementos a cada clique do botão
                            } else if (index === loadedComponent) {
                                return (
                                    <Button
                                        key={index}
                                        disableRipple
                                        sx={{ color: "#aaf" }}
                                        onClick={() => setLoadedComponent(loadedComponent + 5)}
                                    >
                                        Carregar mais...
                                    </Button>
                                );
                            } else return null;
                        })
                    )}
                </Paper>
            </Paper>
            <Dialog
                open={dialogOpen}
                maxWidth="xl"
                onClose={handleClose}
                sx={mainDialogStyling}
                /**
                 * CSS do Paper do Dialog explicitado aqui por conta de como funciona
                 * o elemento.
                 * Seguindo a documentação, o CSS do elemento Paper de dentro
                 * do Dialog é manipulado por uma Prop do Dialog.
                 */
                PaperProps={{
                    sx: {
                        borderRadius: "1.5em",
                        "@media (max-width: 500px)": {
                            margin: 0,
                            borderRadius: 0,
                        },
                    },
                }}
            >
                <DialogTitle className="dialog-window-title">
                    {loading ? (
                        "Carregando informações da liga..."
                    ) : (
                        <Box className="title-box">
                            <Box>
                                <span className="league-name-prefix">Classificações de: </span>
                                <span className="league-bigname">
                                    {/**
                                     * Mostra o nome da season correspondente a tab atual
                                     */}
                                    {
                                        seasonTasks?.data?.seasons.find(
                                            (data) => parseInt(data.year) === season
                                        )?.displayName
                                    }
                                </span>{" "}
                                <span className="league-title-abbr">
                                    {standingTasks?.data!.abbreviation}
                                </span>
                            </Box>
                            <span className="date-lenght">
                                {/**
                                 * Encontra a data da tab atual dentro do seasonTasks.data.seasons
                                 * e pega o seu startDate e endDate
                                 */}
                                {parseDateString(
                                    seasonTasks?.data?.seasons.find(
                                        (data) => parseInt(data.year) === season
                                    )!?.startDate,
                                    seasonTasks?.data?.seasons.find(
                                        (data) => parseInt(data.year) === season
                                    )!?.endDate
                                )}
                            </span>
                        </Box>
                    )}
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <TabContext value={tabValue}>
                        <TabList
                            onChange={handleTabChange}
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            {seasonTasks?.data?.seasons.map((value, index) => {
                                /**
                                 *  Uma lista de tabs com no máximo 10 tabs visíveis, clicar em um ano irá exibir
                                 *  as Classificações de times correspontendes ao ano.
                                 */
                                if (index < 10) {
                                    return (
                                        <Tab
                                            key={index}
                                            label={value.year}
                                            value={`${value.year}`}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </TabList>
                        <TabPanel value={tabValue} className="main-tab-panel">
                            {/**
                             *
                             *   Mostra as classificações do ano correspondente, de acordo com
                             *   a tab atual.
                             *
                             *   @bug
                             *   Aviso: foi encontrado um bug server-side no endpoint:
                             *       https://api-football-standings.azharimm.site/leagues/chn.1/standings?season=2021
                             *
                             *   onde retorna:
                             *       {"status":false,"data":"Error: TypeError: Cannot read property 'map' of undefined"}
                             *   um erro de JavaScript do próprio servidor.
                             *
                             *   Porém, quando se faz uma request direta do JSON no navegador na endpoint /seasons/
                             *   o valor das ligas de 2021 é mostrado:
                             *
                             *           "year": 2021,
                             *           "startDate": "2021-01-01T10:00Z",
                             *           "endDate": "2022-01-01T04:59Z",
                             *           "displayName": "2021 Chinese Super League",
                             *           "types": [...
                             *
                             *   com isso, a tab de 2021 do ID chn.1 (Chinese Super League) recebe erro 500.
                             *
                             **/}
                            <StandingsTable
                                data={seasonTasks?.data}
                                status={seasonTasks?.status}
                                isLoading={loading}
                                standingTasks={standingTasks}
                            />
                        </TabPanel>
                    </TabContext>
                </DialogContent>
            </Dialog>
        </Box>
    );
};
export default Home;
