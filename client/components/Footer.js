
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__main'>
          <h1 className='footer__h1'>Developer3027</h1>
          <p className='footer__p'>dev3027@mason-roberts.com</p>
        </div>
        <div className='footer__mid'>
          <Link href='/'>
            <a>
              <img
                className='footer__logo__img'
                src='./images/logo-500.png'
                alt='dev 30 27'
              />
            </a>
          </Link>
        </div>

        <div className='footer__div'>
          <ul>
            <Link href='/contact'>
              <a>
                <li>Contact</li>
              </a>
            </Link>
            <Link href='/resume'>
              <a>
                <li>Resume</li>
              </a>
            </Link>
          </ul>
        </div>

        <div className='footer__div'>
          <ul>
            <a
              href='https://www.linkedin.com/in/mason-roberts-3027/'
              target='_blank'
              rel='noreferrer'>
              <li>LinkedIn</li>
            </a>
            <a
              href='https://twitter.com/Developer3027'
              target='_blank'
              rel='noreferrer'>
              <li>Twitter</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
