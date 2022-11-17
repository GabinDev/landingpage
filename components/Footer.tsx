import React, { FC } from 'react';
import styles from '../styles/landingpage/footer.module.css';
import app from '../styles/app.module.css';
import Link from 'next/link';

type FooterProps = {}

const Footer: FC<FooterProps> = ({ }) => {
  return (
    <footer className={styles.container}>
      <div className={app.centeredContainer}>
        <div className={styles.row}>
          <div className={styles.column1}>
            <h1>LOGO.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ea commodo consequat.
            </p>
            <div className={styles.buttonsGroup}>
              <button className={styles.button}></button>
              <button className={styles.buttonActive}></button>
              <button className={styles.buttonActive}></button>
            </div>
          </div>

          <div className={styles.column2}>
            <div className={styles.titleColumn2}>
              <span>Our Links</span>
              <div className={styles.borderColumn2}>
                <span className={styles.div1} />
                <span className={styles.div2} />
              </div>
            </div>
            <Link href="#" style={{ color: '#2370C8' }}>Home</Link>
            <Link href="#" >About us</Link>
            <Link href="#" >Services</Link>
            <Link href="#" >Team</Link>
            <Link href="#" >Blog</Link>
          </div>

          <div className={styles.column2}>
            <div className={styles.titleColumn2}>
              <span>Our Company</span>
              <div className={styles.borderColumn2}>
                <span className={styles.div1} />
                <span className={styles.div2} />
              </div>
            </div>
            <Link href="#" >About Company</Link>
            <Link href="#" >Our Testimonials</Link>
            <Link href="#" >Latest News</Link>
            <Link href="#" > Our misson</Link>
            <Link href="#" > Get a free Quot</Link>
          </div>

          <div className={styles.column2}>
            <div className={styles.titleColumn2}>
              <span>Our Services</span>
              <div className={styles.borderColumn2}>
                <span className={styles.div1} />
                <span className={styles.div2} />
              </div>
            </div>
            <Link href="#" >App Development</Link>
            <Link href="#" > Web Development</Link>
            <Link href="#" >Graphic Design</Link>
            <Link href="#" >Web Solution</Link>
            <Link href="#" >App Design</Link>
          </div>
        </div>

        <div className={styles.copyright}>
          @ Copyright 2020 Brandoxide. All rights reserved.
        </div>


      </div>
    </footer>
  )
}

export default Footer