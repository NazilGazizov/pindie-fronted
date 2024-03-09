import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import CardList from "../components/CardsList/CardList";

export default async function New() {
    
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
    

    return (
        <CardList id="popular" title="Популярное" data={popularGames}/>
    )
}