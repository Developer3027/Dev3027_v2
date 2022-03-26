import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import {
  FaBars,
  FaHome,
  FaBlackTie,
  FaConciergeBell,
  FaClipboardCheck,
  FaScroll,
  FaGraduationCap,
  FaRegThumbsUp,
  FaChevronRight,
  FaRegQuestionCircle,
  FaMoon,
  FaSun
} from 'react-icons/fa';

export default function Sidebar() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  function checkShow() {
    if (!show) {
      return;
    } else {
      setShow(!show);
    }
  }


  return (
    <div className='nav__fixed'>
      <nav className={`menu ${show ? 'open' : ''}`} id='menu'>
        <div className='actionbar'>
          <div>
            <button
              className='menuBtn'
              onClick={() => {
                setShow(!show);
              }}
              id='menuBtn'>
              <FaBars />
            </button>
            <h3 className={`menuText ${show ? 'open2' : ''}`}>Dashboard</h3>
          </div>
        </div>
        <ul className='optionsBar'>
          <li className='menuItem'>
            <Link href='/'>
              <a
                className='menuOption'
                onClick={() => {
                  router.push('/');
                  checkShow();
                }}>
                <i>
                  <FaHome />
                </i>
                <h5 className={`menuText ${show ? 'open2' : ''}`}>Home</h5>
              </a>
            </Link>
          </li>
          <li className='menuBreak'>
            <hr />
          </li>
          <li className='menuItem'>
            <button
              onClick={() => {
                router.push('/#about');
                checkShow();
              }}
              className='menuOption'
              id='aboutBtn'>
              <i>
                <FaBlackTie />
              </i>
              <h5 className={`menuText ${show ? 'open2' : ''}`}>About</h5>
            </button>
          </li>
          <li className='menuItem'>
            <button
              className='menuOption'
              id='servicesBtn'
              onClick={() => {
                router.push('/#services');
                checkShow();
              }}>
              <i>
                <FaConciergeBell />
              </i>
              <h5 className={`menuText ${show ? 'open2' : ''}`}>Services</h5>
            </button>
          </li>
          <li className='menuItem'>
            <button
              className='menuOption'
              id='projectsBtn'
              onClick={() => {
                router.push('/#templates');
                checkShow();
              }}>
              <i>
                <FaClipboardCheck />
              </i>
              <h5 className={`menuText ${show ? 'open2' : ''}`}>Templates</h5>
            </button>
          </li>
          <li className='menuBreak'>
            <hr />
          </li>
          <li className='menuItem'>
            <button
              className='menuOption'
              id='blogBtn'
              onClick={() => {
                setShow(!show);
                checkShow();
              }}>
              <i>
                <FaScroll />
              </i>
              <h5 className={`menuText ${show ? 'open2' : ''}`}>Blog</h5>
            </button>
          </li>
          <li className='menuItem'>
            <button
              className='menuOption'
              id='schoolBtn'
              onClick={() => {
                setShow(!show);
                checkShow();
              }}>
              <i>
                <FaGraduationCap />
              </i>
              <h5 className={`menuText ${show ? 'open2' : ''}`}>School</h5>
            </button>
          </li>
          <li className='menuItem'>
            <button
              className='menuOption'
              id='schoolBtn'
              onClick={() => {
                setShow(!show);
                checkShow();
              }}>
              <i>
                <FaRegThumbsUp />
              </i>
              <h5 className={`menuText ${show ? 'open2' : ''}`}>Network</h5>
            </button>
          </li>
          <li className='menuBreak'>
            <hr />
          </li>
        </ul>
        <div className='menuUser'>
          <a
            href='#'
            onClick={() => {
              setShow(!show);
              checkShow();
            }}>
            <div>
              <img src='./images/mlr.png' alt='Mason Roberts' />
            </div>
            <h5 className='Username menuText'>Mason</h5>
            <p className={`menuText ${show ? 'open2' : ''}`}>
              <i>
                <FaChevronRight />
              </i>
            </p>
          </a>
          <div className='userInfo'>
            <div>
              <h1>
                <i>
                  <FaRegQuestionCircle />
                </i>
              </h1>
              <p>How can I Help?</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
