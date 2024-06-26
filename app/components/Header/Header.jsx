"use client"
import Styles from './Header.module.css'
import { Overlay } from '../Overlay/Overlay'
import { Popup } from '../Popup/Popup'
import { AuthForm } from '../AuthForm/AuthForm'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useStore } from '@/app/store/app-store'
import { RegisterForm } from '../RegisterForm/RegisterForm'


export const Header = () => {

  const pathname = usePathname();
  const store = useStore();
  const router = useRouter();

  const handleLogout = () => {
    store.logout();
    router.push('/')
};

  return (
    <header className={Styles['header']}>
      {
    pathname === "/" ? 
    <img
    className={`${Styles['logo__image']} ${Styles['logo']}`}
    src="/images/logo.svg"
    alt="Логотип Pindie"
    />
    : <Link href="/" className={Styles['logo']}>
  <img
    className={Styles['logo__image']}
    src="/images/logo.svg"
    alt="Логотип Pindie"
  />
    </Link>
}

      <nav className={Styles['menu']}>
        <ul className={Styles['menu__list']}>
          <li className={Styles['menu__item']}>
            <Link href="/new" className={`${Styles["menu__link"]} ${
            pathname === "/new" && Styles["menu__link_active"]}`}>
              Новинки
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/popular" className={`${Styles["menu__link"]} ${
            pathname === "/popular" && Styles["menu__link_active"]}`}>
              Популярные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/shooters" className={`${Styles["menu__link"]} ${
            pathname === "/shooters" && Styles["menu__link_active"]}`}>
              Шутеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/runners" className={`${Styles["menu__link"]} ${
            pathname === "/runners" && Styles["menu__link_active"]}`}>
              Ранеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/pixel-games" className={`${Styles["menu__link"]} ${
            pathname === "/pixel-games" && Styles["menu__link_active"]}`}>
              Пиксельные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/tds" className={`${Styles["menu__link"]} ${
            pathname === "/tds" && Styles["menu__link_active"]}`}>
              TDS
            </Link>
          </li>
        </ul>
          {store.isAuth ? ( pathname === '/profile' ? <div className={Styles['auth']}><button className={Styles['auth__button']} onClick={handleLogout}>Выйти</button></div> : <Link href="/profile" className={Styles['logo-profile']}><img src='/images/user (7).png'/></Link>)
          : <div className={Styles['auth']}><button className={Styles['auth__button']} onClick={store.openPopup}>Войти</button></div>}
      </nav>
      <Overlay/>
      <Popup>
          {store.isRegister ? <AuthForm/> : <RegisterForm/>}
      </Popup>
    </header>
  )
}