import CardList from "../components/CardsList/CardList";
import { getGamesByCategory } from "../data/data-utils";

export default function New() {
    
    const runnerGames = getGamesByCategory("runner");

    return (
        <CardList id="runner" title="Ранеры" data={runnerGames}/>
    )
}