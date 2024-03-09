import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import CardList from "../components/CardsList/CardList";

export default async function New() {
    
    const shooterGames = await getNormalizedGamesDataByCategory(endpoints.games, "shooter");

    return (
        <CardList id="shooter" title="Шутеры" data={shooterGames}/>
    )
}