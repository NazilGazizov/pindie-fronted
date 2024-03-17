'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import CardList from "../components/CardsList/CardList";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
    
    const runnerGames = useGetDataByCategory(endpoints.games, "runner");

    return (
        
        <main className="main-inner">
        { runnerGames ?
        ( <CardList id="runner" title="Ранеры" data={runnerGames}/>
        ) : (
            <Preloader/>
        )}
        </main>
    )
}
