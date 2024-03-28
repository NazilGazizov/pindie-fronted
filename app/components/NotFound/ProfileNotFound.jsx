import Styles from './NotFound.module.css';
import {NotFoundImage} from './not-found.jsx';

export const ProfileNotFound = () => {
  return (
    <div className={Styles["not-found"]}>
      <NotFoundImage />
      <h2 className={Styles["not-found__text"]}>Вы не авторизованны :(</h2>
    </div>
  )
};