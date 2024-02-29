import CardList from "../components/CardsList/CardList";
import { getGamesByCategory } from "../data/data-utils";

export default function New() {
    
    const pixelGames = getGamesByCategory("pixel");

    return (
        <CardList id="pixel" title="Пиксельные" data={pixelGames}/>
    )
}