'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import CardList from "../components/CardsList/CardList";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
    
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    
    return (
        <main className="main-inner">
        { popularGames ?
        (<CardList id="popular" title="Популярное" data={popularGames}/>
        ) : (
            <Preloader/>
        )}
        </main>
    )
}