import CardList from "../components/CardsList/CardList";
import { getGamesByCategory } from "../data/data-utils";

export default function New() {
    
    const popularGames = getGamesByCategory("popular");

    return (
        <CardList id="popular" title="Популярное" data={popularGames}/>
    )
}