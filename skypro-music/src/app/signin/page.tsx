import Link from "next/link";
import Image from "next/image";
import styles from "./Signin.module.css";
import classNames from "classnames";

export default function SigninPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <Link href="/">
              <div className={styles.modalLogo}>
                <Image
                  src="/img/logo_modal.png"
                  width={140}
                  height={21}
                  alt="logo"
                />
              </div>
            </Link>
            <input
              className={classNames(styles.modalInput, styles.login)}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Пароль"
            />{" "}
            <button className={styles.modalBtnEnter}>
              <Link href="/" className={styles.modalBtnEnterA}>
                Войти
              </Link>
            </button>
            <button className={styles.modalBtnSignup}>
              <Link href="/signup" className={styles.modalBtnSignupA}>
                Зарегистрироваться
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
