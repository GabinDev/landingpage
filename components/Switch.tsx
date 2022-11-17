import React, {
  FC,
  HTMLAttributes,
  useState
} from 'react';
import styles from '../styles/components/switch.module.css';
import { Switch as MuiSwitch } from '@mui/material';
import { styled } from '@mui/material/styles'


const CustomSwitch = styled(MuiSwitch)(({ theme }) => ({
  width: 56,
  height: 32,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 30,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(18px)',
      background: '#2370C8'
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 4,
    '&.Mui-checked': {
      transform: 'translateX(24px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 2,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 24,
    height: 24,
    borderRadius: 12,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 32 / 2,
    opacity: 2,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


type SwitchProps = HTMLAttributes<HTMLDivElement> & {

}

const Switch: FC<SwitchProps> = ({ }) => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.container} >
      <span className={!active ? styles.labelActive : styles.label}>Monthly</span>
      <CustomSwitch
        value={active}
        onChange={() => setActive(a => !a)}
        style={{}}
      />
      <span className={active ? styles.labelActive : styles.label}>Yearly</span>
    </div>
  )
}

export default Switch