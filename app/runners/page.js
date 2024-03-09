import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import CardList from "../components/CardsList/CardList";

export default async function New() {
    
    const runnerGames = await getNormalizedGamesDataByCategory(endpoints.games, "runner");

    return (
        <CardList id="runner" title="Ранеры" data={runnerGames}/>
    )
}