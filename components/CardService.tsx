import Image from 'next/image';
import React, { FC } from 'react';
import styles from '../styles/landingpage/common.module.css'
import IconButton from './IconButton';

type CardServiceProps = {
  active?: boolean
}

const CardService: FC<CardServiceProps> = ({ active }) => {
  return (
    <div className={active ? styles.cardContainerActive : styles.cardContainer}>
      <Image
        src='/svg/card_image.svg'
        width={90}
        height={90}
        alt='avatar'
      />
      <span className={styles.cardTitle}>
        Web Development
      </span>
      <p className={styles.cardParagraph}>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmodtempor
        incididunt ut labore et dolore
      </p>
      {active &&
        <IconButton
          src='/svg/arrow-right-google.svg'
          active
          style={{
            position: 'absolute',
            bottom: '-25px'
          }}
        />
      }
    </div>
  )
}

export default CardService