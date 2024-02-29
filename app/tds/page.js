import CardList from "../components/CardsList/CardList";
import { getGamesByCategory } from "../data/data-utils";

export default function New() {
    
    const TDSGames = getGamesByCategory("TDS");

    return (
        <CardList id="TDS" title="TDS" data={TDSGames}/>
    )
}