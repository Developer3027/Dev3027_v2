import { useState } from 'react';

import STLayout from '../components/layouts/STLayout';
import styles from '../styles/SaltTar.module.css';

export default function SaltandTar () {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={styles.backing}>
        <header className={styles.backing__header}>
          <div className={styles.st__navbar}>
            <div className={styles.st__nav__container}>
              <div className={styles.st__logo}></div>
              <div>
                <nav>
                  <button
                    onClick={() => setMenu(!menu)}
                    aria-controls='primary-navigation'
                    aria-expanded='false'
                    className={styles.mobile}
                    id='mobile'>
                    <span className={styles.st__sr__only}>menu</span>
                    {!menu ? (
                      <img
                        className={styles.st__menu__show}
                        src='/images/st/nav.svg'
                      />
                    ) : (
                      <img
                        className={styles.st__menu__hide}
                        src='/images/st/nav_close.svg'
                      />
                    )}
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <section id='home' className={styles.st__container}>
          <div className={styles.st__upper}>
            <div className={styles.st__hero}>
              <div className={styles.st__title__info}>
                <h1 className={styles.st__hero__title}>Salt and Tar</h1>
                <h3 className={styles.st__sub__title}>
                  Journey of a wooden boat
                </h3>
                <div className={styles.st__hero__actions}>
                  <a href='#about' className={styles.st__learn__more__btn}>
                    Learn More
                  </a>
                  <a href='#support' className={styles.st__help__build__btn}>
                    Help Build
                  </a>
                </div>
              </div>
              <div className={styles.st__hero__img__wrap}>
                <img
                  className={styles.st__hero__tag}
                  src='/images/st/Group 8.png'
                  alt='Salt and Tar'
                />
              </div>
            </div>
            <div className={styles.st__arrow__wrap}>
              <img src='/images/st/Group 28.svg' alt='border bottom' />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

SaltandTar.getLayout = function getLayout(SaltandTar) {
  return <STLayout>{SaltandTar}</STLayout>;
};
