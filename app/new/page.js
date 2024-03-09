import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import CardList from "../components/CardsList/CardList";

export default async function New() {
    
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games,"new");

    return (
        <CardList id="new" title="Новинки" data={newGames}/>
    )
}