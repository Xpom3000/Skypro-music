import Image from "next/image";
import Link from "next/link";
import styles from "./Signup.module.css";

export default function SignupPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
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
              className={styles.modalInput}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button className={styles.modalBtnSignupEnt}>
              <Link href="/" className={styles.modalBtnSsignupEntA}>
                Зарегистрироваться
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
