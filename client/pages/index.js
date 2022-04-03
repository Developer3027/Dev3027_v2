import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaCalendar,
  FaAward,
  FaMobileAlt,
  FaLaptopCode,
  FaPalette,
  FaCode,
  FaUniversalAccess,
  FaBullhorn
} from 'react-icons/fa';

import MainLayout from '../components/layouts/MainLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const serviceIconStyle = {color: 'darkslategrey', fontSize: '36px'}
  return (
    <div>
      <Head>
        <title>Mason Roberts | Dev3027</title>
        <meta name='description' content='Mason Roberts site' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section id='home' className={styles.section}>
          <div className={styles.container}>
            <div className={styles.hero__container}>
              <div className={styles.hero__wrapper}>
                <div className={styles.hero__leftEdge}>
                  <p>Mason Roberts</p>
                </div>
                <div className={styles.hero__outer}>
                  <div className={styles.hero__inner}>
                    <div className={styles.hero__quick__links}>
                      <Link href='/saltandtar'>
                        <a>
                          <Image
                            src='/images/logo.svg'
                            width={80}
                            height={80}
                          />
                        </a>
                      </Link>
                      <Link href=''>
                        <a>
                          <Image
                            src='/images/Hermit_logo.svg'
                            width={80}
                            height={80}
                          />
                        </a>
                      </Link>
                      <Link href=''>
                        <a>
                          <Image
                            src='/images/Nutra-Logo.svg'
                            width={80}
                            height={80}
                          />
                        </a>
                      </Link>
                    </div>
                    <div>
                      <p className={styles.hero__top}>
                        A{' '}
                        <span className={styles.hero__hl}>
                          digital designer
                        </span>{' '}
                        and{' '}
                        <span className={styles.hero__hl}>
                          fullstack developer
                        </span>{' '}
                        living in the Carolinas, United States.
                      </p>
                    </div>
                    <div>
                      <p className={styles.hero__mid}>
                        If you would like to know more about me, or are
                        interested in my work, you can contact me at{' '}
                        <span className={styles.hero__hl}>
                          dev3027@mason-roberts.com
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className={styles.hero__btns}>
                    <Link className={styles.hero__link} href='/dash'>
                      <a>
                        <div className={styles.hero__btnsOne}>
                          <p>Enter</p>
                        </div>
                      </a>
                    </Link>
                    <Link className={styles.hero__link} href='/contact'>
                      <a>
                        <div className={styles.hero__btnsTwo}>
                          <p>Contact Me</p>
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div className={styles.hero__title}>
                    <p className={styles.hero__text}>Developer3027</p>
                  </div>
                </div>

                <div className={styles.hero__pic}>
                  <img
                    className={styles.hero__img}
                    src='/images/binary-code-amico.svg'
                    alt='yep'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='about' className={styles.section}>
          <div className={styles.container}>
            <div className='row'>
              <div className={styles.section__title}>
                <h2>About</h2>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.about__content}>
                <div className={styles.row}>
                  <div className={styles.about__text}>
                    <h3>
                      I'm Mason Roberts, a <span>Web Architect</span>.
                    </h3>
                    <p>
                      In 2019 I went through my computer career.com and gained a
                      few certification. Learned how computers work about
                      networking and how the internet works and network
                      security. In 2020 I went through Lambda School and learned
                      full stack development. I learned Figma and designed many
                      sites and apps. In 2022 I learned AWS services, the
                      resources and tools available. Now I build web based
                      solutions for you.
                    </p>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.about__text}>
                    <div className={styles.about__cert}>
                      <div className={styles.about__cert__link}>
                        <FaAward />
                        <a
                          href='/certificates/CertificateOfCompletion_SAAC02.pdf'
                          target='_blank'
                          rel='noreferrer'>
                          AWS SAA Course
                        </a>
                      </div>
                      <div className={styles.about__cert__link}>
                        <FaAward />
                        <a
                          href='/certificates/LE-1.pdf'
                          target='_blank'
                          rel='noreferrer'>
                          Linux Essentials
                        </a>
                      </div>
                      <div className={styles.about__cert__link}>
                        <FaAward />
                        <a
                          href='/certificates/Certificate_Programming_ Fundamentals.pdf'
                          target='_blank'
                          rel='noreferrer'>
                          Program Fundamentals
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.about__info}>
                  <div className={styles.about__personal__info}>
                    <div className={styles.about__personal}>
                      <div className={styles.about__info__item}>
                        <p>
                          LinkedIn:{' '}
                          <span>www.linkedin.com/in/mason-roberts-3027</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Age: <span>50</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Website: <span>www.mason-roberts.com</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Email: <span>mrobe18@gmail.com</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Degree: <span>Online</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Country: <span>United States</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          State: <span>South Carolina</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Freelance: <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className={styles.about__skills}>
                      <div className={styles.about__skill__item}>
                        <div className={styles.skill__type}>HTML</div>
                        <div className={styles.skill__infog}>
                          Semantic Code V5
                        </div>
                      </div>
                      <div className={styles.about__skill__item}>
                        <div className={styles.skill__type}>CSS</div>
                        <div className={styles.skill__infog}>
                          Style Sheets V3
                        </div>
                      </div>
                      <div className={styles.about__skill__item}>
                        <div className={styles.skill__type}>ReactJs</div>
                        <div className={styles.skill__infob}>
                          Javascript V16.8 ^
                        </div>
                      </div>
                      <div className={styles.about__skill__item}>
                        <div className={styles.skill__type}>NextJs</div>
                        <div className={styles.skill__infob}>
                          Javascript V12.0 ^
                        </div>
                      </div>

                      <div className={styles.about__skill__item}>
                        <div className={styles.skill__type}>Node</div>
                        <div className={styles.skill__infob}>
                          Javascript V12.0
                        </div>
                      </div>
                      <div className={styles.about__skill__item}>
                        <div className={styles.skill__type}>Express</div>
                        <div className={styles.skill__infob}>
                          Javascript V4.0
                        </div>
                      </div>
                      <div className={styles.about__skill__item}>
                        <div className={styles.skill__type}>AWS</div>
                        <div className={styles.skill__infoo}>
                          Cloud Services
                        </div>
                      </div>
                      <div className={styles.about__skill__item}>
                        <div className={styles.skill__type}>Azure</div>
                        <div className={styles.skill__infoo}>
                          Cloud Services
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.specs__info}>
                <div className={styles.education}>
                  <h3 className={styles.title}>Education</h3>
                  <div className={styles.row}>
                    <div className={styles.timeline_box}>
                      <div className={styles.timeline}>
                        <div className={styles.timeline_item}>
                          <div className={styles.circle_dot}></div>
                          <h3 className={styles.timeline_date}>
                            <i>
                              <FaCalendar />
                            </i>
                            2018 - 2019
                          </h3>
                          <h4 className={styles.timeline_title}>
                            my computer career
                          </h4>
                          <p className={styles.timeline_text}>
                            received Linux Essentials LE-1 / MTA Security
                            Fundamentals
                          </p>
                        </div>

                        <div className={styles.timeline_item}>
                          <div className={styles.circle_dot}></div>
                          <h3 className={styles.timeline_date}>
                            <i>
                              <FaCalendar />
                            </i>
                            2019 - 2020
                          </h3>
                          <h4 className={styles.timeline_title}>
                            Lambda School
                          </h4>
                          <p className={styles.timeline_text}>
                            Full Stack Web Development - HTML, CSS, Javascript,
                            ReactJs, mySql, Node, Github, Slack, Zoom
                          </p>
                        </div>

                        <div className={styles.timeline_item}>
                          <div className={styles.circle_dot}></div>
                          <h3 className={styles.timeline_date}>
                            <i>
                              <FaCalendar />
                            </i>
                            2020 - 2021
                          </h3>
                          <h4 className={styles.timeline_title}>
                            Frontend Mentor
                          </h4>
                          <p className={styles.timeline_text}>
                            Full Stack Web Development - HTML, CSS, Javascript,
                            ReactJs, MERN, Node, Github
                          </p>
                        </div>

                        <div className={styles.timeline_item}>
                          <div className={styles.circle_dot}></div>
                          <h3 className={styles.timeline_date}>
                            <i>
                              <FaCalendar />
                            </i>
                            2021 - 2022
                          </h3>
                          <h4 className={styles.timeline_title}>
                            www.acloudguru.com
                          </h4>
                          <p className={styles.timeline_text}>
                            AWS Solution Architect Associate - Storage, VPC,
                            Cloud Networks, Cloud Security, Decoupling,
                            Governance, Serverless{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.experience}>
                  <h3 className={styles.title}>Experience</h3>
                  <div className={styles.row}>
                    <div className={styles.timeline_box}>
                      <div className={styles.timeline}>
                        <div className={styles.timeline_item}>
                          <div className={styles.circle_dot}></div>
                          <h3 className={styles.timeline_date}>
                            <i>
                              <FaCalendar />
                            </i>
                            2020 - 2022
                          </h3>
                          <h4 className={styles.timeline_title}>
                            <a
                              href='https://www.hermitplus.com'
                              target='_blank'
                              rel='noreferrer'>
                              Hermit Plus
                            </a>
                          </h4>
                          <p className={styles.timeline_text}>
                            web app that brings all the hermits together in one
                            place. Think Disney plus for hermits. Enjoy like
                            never before.
                          </p>
                        </div>

                        <div className={styles.timeline_item}>
                          <div className={styles.circle_dot}></div>
                          <h3 className={styles.timeline_date}>
                            <i>
                              <FaCalendar />
                            </i>
                            2021 - 2022
                          </h3>
                          <h4 className={styles.timeline_title}>
                            <a
                              href='https://erudition-saa-c02.vercel.app/'
                              target='_blank'
                              rel='noreferrer'>
                              Erudition
                            </a>
                          </h4>
                          <p className={styles.timeline_text}>
                            Cliff notes web app for learning AWS Solution
                            Architect Associate certification. Quiz's, Practice
                            Exams, and study notes to help learn and keep fresh
                            with AWS services and resources. In Progress.
                          </p>
                        </div>

                        <div className={styles.timeline_item}>
                          <div className={styles.circle_dot}></div>
                          <h3 className={styles.timeline_date}>
                            <i>
                              <FaCalendar />
                            </i>
                            2020 - 2021
                          </h3>
                          <h4 className={styles.timeline_title}>
                            <a
                              href='https://nutrasite.herokuapp.com'
                              target='_blank'
                              rel='noreferrer'>
                              NutraSite
                            </a>
                          </h4>
                          <p className={styles.timeline_text}>
                            Online ecommerce store built with the MERN Stack.
                            Local retail store concept in progress.
                          </p>
                        </div>

                        <div className={styles.timeline_item}>
                          <div className={styles.circle_dot}></div>
                          <h3 className={styles.timeline_date}>
                            <i>
                              <FaCalendar />
                            </i>
                            2021 - 2022
                          </h3>
                          <h4 className={styles.timeline_title}>
                            Template sites
                          </h4>
                          <p className={styles.timeline_text}>
                            Collection of HTML, CSS, Javascript sites.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='services' className={styles.section}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.section__title}>
                <h2>Services</h2>
              </div>
            </div>
            <div className={styles.card__row}>
              <div className={styles.service__item}>
                <div className={styles.service__item__inner}>
                  <div className={styles.service__icons}>
                    <FaMobileAlt style={serviceIconStyle} />
                  </div>
                  <h4>Responsive</h4>
                  <p>
                    Mobile first or desktop first, your site will look and
                    respond great. Phone, tablet, or computer.
                  </p>
                </div>
              </div>
              <div className={styles.service__item}>
                <div className={styles.service__item__inner}>
                  <div className={styles.service__icons}>
                    <FaLaptopCode style={serviceIconStyle} />
                  </div>
                  <h4>Development</h4>
                  <p>
                    Frontend, or backend. Built for you from the ground up. From
                    design to React to Node and MongoDb.
                  </p>
                </div>
              </div>
              <div className={styles.service__item}>
                <div className={styles.service__item__inner}>
                  <div className={styles.service__icons}>
                    <FaPalette style={serviceIconStyle} />
                  </div>
                  <h4>Design</h4>
                  <p>
                    Figma! Clients can comment on live file. Prototype! Get
                    graphics in PNG or SVG. formats!
                  </p>
                </div>
              </div>
              <div className={styles.service__item}>
                <div className={styles.service__item__inner}>
                  <div className={styles.service__icons}>
                    <FaCode style={serviceIconStyle} />
                  </div>
                  <h4>Code</h4>
                  <p>
                    Code is yours! I use Github, follow industry standards and
                    write clean code. Take it anywhere, it's yours.
                  </p>
                </div>
              </div>
              <div className={styles.service__item}>
                <div className={styles.service__item__inner}>
                  <div className={styles.service__icons}>
                    <FaUniversalAccess style={serviceIconStyle} />
                  </div>
                  <h4>DNA</h4>
                  <p>
                    Web for everyone, built with A11y in mind. Images are
                    optimized, sized and formatted for faster load times.
                  </p>
                </div>
              </div>
              <div className={styles.service__item}>
                <div className={styles.service__item__inner}>
                  <div className={styles.service__icons}>
                    <FaBullhorn style={serviceIconStyle} />
                  </div>
                  <h4>SEO</h4>
                  <p>
                    Every site has meta and og tags for search engines and
                    social networks to find and rank your site.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='templates' class={styles.section}>
          <div class={styles.container}>
            <div className={styles.row}>
              <div className={styles.section__title}>
                <h2>Templates</h2>
              </div>
            </div>
            <div class={styles.row}>
              <div className={styles.about__text}>
                <p>
                  Here are some of the completed HTML, CSS, and JS projects I have created that you can use as templates for free. Many are modified versions of online tutorials. These include the github repo, video link, general information on the template and a live example. This is everything you need to get you started as quick as possible.
                </p>
              </div>
            </div>
            {/* <div class="row">
            <div class="portfolio-heading">
              <h2>Current Projects</h2>
            </div>
          </div>
          <div class="row">
            <!-- Portfolio Item -->
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/erudition.png" alt="">
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/hermitplus.png" alt="">
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/kathryn-roberts.png" alt="">
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/music-found.png" alt="">
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/saltar.png" alt="">
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/amazon.png" alt="">
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(Home) {
  return (
    <MainLayout>{Home}</MainLayout>
  )
}

