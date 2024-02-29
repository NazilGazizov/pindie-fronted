import CardList from "../components/CardsList/CardList";
import { getGamesByCategory } from "../data/data-utils";

export default function New() {
    
    const shooterGames = getGamesByCategory("shooter");

    return (
        <CardList id="shooter" title="Шутеры" data={shooterGames}/>
    )
}