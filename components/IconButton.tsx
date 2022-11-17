import React, {
  FC,
  HTMLAttributes
} from 'react'
import Image, {
  StaticImageData
} from 'next/image';
import styles from '../styles/landingpage/common.module.css';

type IconButtonProps = HTMLAttributes<HTMLDivElement> & {
  src: string | StaticImageData,
  active?: boolean
}


const IconButton: FC<IconButtonProps> = ({ src, active, ...props }) => {
  return (
    <div
      className={active ? styles.iconbuttonActive : styles.iconbutton}
      {...props}
    >
      <Image
        src={src}
        width={24}
        height={24}
        alt='icon'
      />
    </div>
  )
}

export default IconButton