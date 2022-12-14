import * as React from 'react';
import Head from '../../node_modules/next/head.js';

import Navbar from '../Navbar'
import styles from './MainLayout.module.css'

type Props = {
  children?: React.ReactNode
};

const MainLayout: React.FC<Props> = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>home Richard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        {children}
      </main>

    </div>
  )
}

export default MainLayout