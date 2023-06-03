import type { NextPage } from 'next'
import Link from 'next/link'
import { Button, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
// import styles from '../styles/globals.css';
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Home: NextPage = () => {
  return (
    <div >
     <div>
       <span>With default Theme:</span>
     </div>
     <Switch {...label} defaultChecked />
     <Switch {...label}  />
     <Switch {...label} disabled defaultChecked />
   </div>
  )
}

export default Home
