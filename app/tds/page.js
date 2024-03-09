import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import CardList from "../components/CardsList/CardList";

export default async function New() {
    
    const TDSGames = await getNormalizedGamesDataByCategory(endpoints.games, "TDS");

    return (
        <CardList id="TDS" title="TDS" data={TDSGames}/>
    )
}