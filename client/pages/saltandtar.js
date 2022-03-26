import { useState } from 'react';

import STLayout from '../components/layouts/ST-Layout';
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
                        className={styles.st__menu__false}
                        src='/images/st/nav.svg'
                      />
                    ) : (
                      <img src='/images/st/nav_close.svg' />
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
                <div className={styles.hero__actions}>
                  <a href='#about' className={styles.st__learn__more__btn}>
                    Learn More
                  </a>
                  <a href='#support' className={styles.st__help__build__btn}>
                    Help Build
                  </a>
                </div>
              </div>
              {/* <div className="hero-img">
                <img className="hero-tag" src="images/Group 8.png" alt="Salt and Tar"/>
              </div> */}
            </div>

            {/* <div className="arrow-wrap">
              <svg className="arrow" width="496" height="159" viewBox="0 0 496 159" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.5 148.5C21.5 102 56 28 144 37C232 46 315 173.5 405 154C495 134.5 546 33.5 405 3M29.5 148.5C18.5653 142.837 12.4347 139.663 1.5 134M29.5 148.5C40.4347 142.837 57.5001 134 57.5001 134" stroke="#FF9256" stroke-width="5"/>
              </svg>
            </div> */}
            {/* <div className="wave">
              <svg
                className="wave1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M698.5 72.5C865.419 72.5 1024 0 1024 0V46.5C1024 46.5 918.5 81 768 90C617.5 99 408 35 268 36C128 37 6.10352e-05 90 6.10352e-05 90V59C6.10352e-05 59 80.1085 6 302.5 6C521.893 6 530.582 72.5 698.5 72.5Z"
                  fill="#40677D"
                />
              </svg>
            </div> */}
            {/* <div className="blue">
              <svg
                className="wave2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="lght-blue-wave"
                  d="M731.143 60.4051C898.062 60.4051 1024 0.499939 1024 0.499939V147H0V49C0 49 121.441 0.49993 343.832 0.499939C563.225 0.499947 563.225 60.4051 731.143 60.4051Z"
                  fill="#B5E5FF"
                />
              </svg>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}

SaltandTar.getLayout = function getLayout(SaltandTar) {
  return <STLayout>{SaltandTar}</STLayout>;
};