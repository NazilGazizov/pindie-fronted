'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import CardList from "../components/CardsList/CardList";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
    
    const pixelGames = useGetDataByCategory(endpoints.games,"pixel");

    return (
        <main className="main-inner">
            { pixelGames ?
            (<CardList id="pixel" title="Пиксельные" data={pixelGames}/>
            ) : (
                <Preloader/>
            )}
        </main>
    )
}