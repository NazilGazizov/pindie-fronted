import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import CardList from "../components/CardsList/CardList";

export default async function New() {
    
    const pixelGames = await getNormalizedGamesDataByCategory(endpoints.games,"pixel");

    return (
        <CardList id="pixel" title="Пиксельные" data={pixelGames}/>
    )
}