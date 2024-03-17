'use client'
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import CardList from "./components/CardsList/CardList";
import { endpoints } from "./api/config";
import { useGetDataByCategory } from "./api/api-hooks";
import { Preloader } from "./components/Preloader/Preloader";

export default function Home() {

  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games,"new");

  return (
    <main className="main">
    <Banner/>
    { popularGames ?
        (<CardList id="popular" title="Популярное" data={popularGames}/>
        ) : (
            <Preloader/>
        )}
      {newGames ? (
        <CardList id="new" title="Новинки" data={newGames} />
        ) : (
        <Preloader/>
        )}
    <Promo/>
  </main>
  );
}
