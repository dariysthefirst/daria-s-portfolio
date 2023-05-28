import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import { Inter } from 'next/font/google'
import circle from './images/circle.png'
import logo from './images/logo (1).png'
import sun from './images/sun.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
title: 'portfolio',
description: '',
}

export default function RootLayout({ children }) {
 return (
 <html lang="en">
 <body className={inter.className}>
 <main>
 <navbar className={styles.navbar}>
  <Image src={logo} className={styles.logo} href='/'/>
  <div className={styles.navbuttons}>
    <Image className={styles.sun} src = {sun}/>
 <Link className={styles.links} href='/'>home</Link>
 </div>
  <div className={styles.navbuttons}>
    <Image className={styles.sun} src = {sun}/>
 <Link className={styles.links} href='/about'>about</Link>
 </div>
 <div className={styles.navbuttons}>
    <Image className={styles.sun} src = {sun}/>
 <Link className={styles.links} href='/projects'>projects</Link>
 </div>
 <div className={styles.navbuttons}>
    <Image className={styles.sun} src = {sun}/>
 <Link className={styles.links} href='/contacts'>contacts</Link>
 </div>
 
 </navbar>
 <div className={styles.content}>
 <Image src={circle} className={styles.background}/>
 {children}
 </div>
 </main>
</body>
</html>
 )
}
