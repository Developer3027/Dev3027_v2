import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className='nav'>
        <div className='nav-wrapper'>
          <div className='nav__logo'>
            <Link href='/'>
              <a>
                <img
                  className='nav__logo__img'
                  src='/images/logo-500.png'
                  alt='logo for dev 30 27'
                />
              </a>
            </Link>
          </div>
          <h2 className='nav__logo__name'>
            <Link href='/'>
              <a>Dev3027</a>
            </Link>
          </h2>
          <div className='nav__specials'>
            <Link href='/saltandtar'>
              <a>
                <h4>Salt&#38;Tar</h4>
              </a>
            </Link>
            <Link href='/hermits'>
              <a>
                <h4>Hermits</h4>
              </a>
            </Link>
            <Link href='/nutrasite'>
              <a>
                <h4>NutraSite</h4>
              </a>
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
};
