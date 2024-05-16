"use client";
import { useEffect, useState } from "react";
import { getData, isResponseOk } from "../api/api-utils";
import { ProfileNotFound } from "../components/NotFound/ProfileNotFound";
import { useStore } from "../store/app-store";
import Styles from "./Profile.module.css";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";

export default function Profile() {
    const store = useStore();
    // const [games, setGames] = useState();
    const [preloaderVisible, setPreloaderVisible] = useState(true);

    // useEffect(() => {
    //     async function fetchData() {
    //         const games = await getData(endpoints.games);
    //         isResponseOk(games) ? setGames(games) : setGames(null);
    //         setPreloaderVisible(false);
    //     }
    //     fetchData();
    // }, []);

    // игры за которые голосовал юзер, не работает, возвращает пустой массив
    // const votedGames = games.filter(function (item) {
    //                 item.users.includes(store.user);
    //             });
    //             console.log(votedGames);
    return (
        <main className={Styles["main"]}>
            {store.isAuth ? (
                <>
                    <div className={Styles["profile"]}>
                        <div className={Styles["basic__information"]}>
                            <img
                                alt="avatar"
                                src="/images/zdes.jpg"
                                className={Styles["avatar"]}
                            />
                            <h2>{store.user.username}</h2>
                            <p>Пользователь</p>
                        </div>
                        <div className={Styles["full__information"]}>
                            <div className={Styles["title"]}>
                                <p className={Styles["title__text"]}>
                                    Информация
                                </p>
                                <hr className={Styles["line"]} />
                            </div>
                            <div className={Styles["information"]}>
                                <div className={Styles["id"]}>
                                    <p>ID</p>
                                    <p>{store.user.id}</p>
                                </div>
                                <div className={Styles["email"]}>
                                    <p>Email</p>
                                    <p>{store.user.email}</p>
                                </div>
                            </div>
                            <div className={Styles["title"]}>
                                <p className={Styles["title__text"]}>
                                    Игры за которые вы проголосовали:
                                </p>
                                <hr className={Styles["line"]} />
                            </div>
                            <div className={Styles["games"]}>
                                <p>типа тут игры</p>
                                <p>upd в разработке</p>
                                <a
                                    href="https://clck.ru/39j9be"
                                    target="_blank"
                                >
                                    *помочь в разработке*
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            ) : preloaderVisible ? (
                <Preloader />
            ) : (
                <section classNameName={Styles["not__found"]}>
                    <ProfileNotFound />
                </section>
            )}
        </main>
    );
}
