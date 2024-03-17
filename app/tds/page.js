'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import CardList from "../components/CardsList/CardList";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
    
    const TDSGames = useGetDataByCategory(endpoints.games, "TDS");

    return (
        
        <main className="main-inner">
        { TDSGames ?
        ( <CardList id="TDS" title="TDS" data={TDSGames}/>
        ) : (
            <Preloader/>
        )}
        </main>
    )
}