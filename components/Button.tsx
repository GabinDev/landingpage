import React, { FC, HTMLAttributes } from 'react'
import styles from '../styles/landingpage/common.module.css'

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className={styles.button}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button