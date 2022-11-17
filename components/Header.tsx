import React, { FC } from 'react';
import styles from '../styles/landingpage/header.module.css';
import app from '../styles/app.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

type HeaderProps = {}

const Header: FC<HeaderProps> = ({ }) => {
  return (
    <header className={styles.container}>
      <div className={app.centeredContainer}>
        <div className={styles.navbar}>
          <h1 className={styles.logo}>LOGO.</h1>
          <div className={styles.centerNavbar}>
            <Link href="#" className={styles.link}>
              HOME
            </Link>
            <Link href="#" className={styles.link}>
              ABOUT
            </Link>
            <Link href="#" className={styles.link}>
              PAGES
            </Link>
            <Link href="#" className={styles.link}>
              SERVICES
            </Link>
            <Link href="#" className={styles.link}>
              PORFOLIO
            </Link>
            <Link href="#" className={styles.link}>
              BLOC
            </Link>
            <Link href="#" className={styles.link}>
              CONTACT
            </Link>
          </div>

          <form className={styles.search}>
            <input
              type="text"
              placeholder='Search'
              className={styles.inputSerach}
            />
            <Image src='/search.png' alt='search' width={24} height={24} />
          </form>
        </div>

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Creative <br /> Digital Agency</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
            sed do eiusmod tempor incididunt.
          </p>

          <Button>Learn More</Button>
        </div>
      </div>
    </header>
  )
}

export default Header