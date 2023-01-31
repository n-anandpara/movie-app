import Head from 'next/head'
import { Open_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { Grid } from '@mui/material';

import MenuList from '@/components/menu/menulist/MenuList';
import MainBoard from '@/components/mainview/mainBoard/MainBoard';
import UserAvatar from '@/components/userInfo/userAvatar/UserAvatar';

import { userData } from '@/types/user';
import { moviesData } from '@/types/movieData';
import useDeviceSize from '@/types/useDeviceSize';
import MobileNavbar from '@/components/mobileNavbar/MobileNavbar';

const open_sans   = Open_Sans({
  subsets: ['latin'],
  weight: '600',
})



export default function Home() {
  const [width] = useDeviceSize();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Quillbot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${open_sans.className}`}>
          <Grid container className={styles.container}>
            {
              width >= 768 && (
                <Grid item className={styles.menuContainer}>
                  <UserAvatar user={userData} />
                  <MenuList />
                </Grid>
              )
            }
            {
              width < 768 && (
                <MobileNavbar />
              )
            }
            <Grid item className={styles.mainView}>
              <MainBoard movieList={moviesData}/>
            </Grid>
          </Grid>
      </main>
    </>
  )
}
