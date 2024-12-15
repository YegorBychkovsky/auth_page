import React from "react";
import DragonPng from "../../assets/images/big_dragon.png";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import styles from "./App.module.scss";
import Form from "../../components/Form/Form";

function App() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.leftBlock}>
            <img
              src={DragonPng}
              alt="Dragon image"
              className={styles.authImg}
            />
            <Logo className={styles.logo} />
            <span>Nick Mine Inc.</span>
          </div>
          <div className={styles.rightBlock}>
            <div>
              <h1>
                Create an account<span>.</span>
              </h1>
              <p className={styles.signInOffer}>
                Already have an account? <a href={"/signIn"} className={styles.singIn}>Sign in</a>
              </p>
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
