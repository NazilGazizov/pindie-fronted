"use client";
import { useEffect, useState } from "react";
import Styles from "./AuthForm.module.css";
import { authorize, isResponseOk } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { useStore } from "@/app/store/app-store";

export const AuthForm = () => {
    const [authData, setAuthData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState({ status: null, text: null });
    const store = useStore();

    const handleInput = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = await authorize(endpoints.auth, authData);
        if (isResponseOk(userData)) {
            store.login({ ...userData, id: userData._id }, userData.jwt);
            setMessage({ status: "success", text: "Вы авторизовались!" });
        } else {
            setMessage({ status: "error", text: "Неверные почта или пароль" });
        }
    };

    const handelReset = () => {
        setAuthData({ email: "", password: "" });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        store.registration();
    };

    useEffect(() => {
        let timer;
        if (store.user) {
            timer = setTimeout(() => {
                store.closePopup();
                setMessage({ status: null, text: null });
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [store.user]);

    return (
        <form className={Styles["form"]}>
            <h2 className={Styles["form__title"]}>Авторизация</h2>
            <div className={Styles["form__fields"]}>
                <label className={Styles["form__field"]}>
                    <span className={Styles["form__field-title"]}>Email</span>
                    <input
                        onInput={handleInput}
                        name="email"
                        className={Styles["form__field-input"]}
                        type="email"
                        placeholder="hello@world.com"
                    />
                </label>
                <label className={Styles["form__field"]}>
                    <span className={Styles["form__field-title"]}>Пароль</span>
                    <input
                        onInput={handleInput}
                        name="password"
                        className={Styles["form__field-input"]}
                        type="password"
                        placeholder="***********"
                    />
                </label>
            </div>
            {message.status && (
                <p className={Styles["form__message"]}>{message.text}</p>
            )}
            <div className={Styles["form__actions-2"]}>
                <div className={Styles["form__actions"]}>
                    <button
                        className={Styles["form__reset"]}
                        type="reset"
                        onClick={handelReset}
                    >
                        Очистить
                    </button>
                    <button
                        className={Styles["form__submit"]}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Войти
                    </button>
                </div>
                <button
                    className={Styles["form__register"]}
                    onClick={handleRegister}
                >
                    Нет учетной записи
                </button>
            </div>
        </form>
    );
};
