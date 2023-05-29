import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import facepic from './images/facepic.png'



export default function About() {
  return (
    <>
    <button className={styles.btn} href='/projects'>see projects</button>
    <div className={styles.container}>
    <p className={styles.text}>
          Hi! I`m Dariya Yuzefchuk, a novice UI/UX designer. I&apos;m a freshman
          student at State university of information and communication
          technologies. I started designing recently, but I already know quite a
          bit of Figma, I&apos;m starting to learn the basics of design and
          composition, I have a good understanding of math and I speak b2
          English.
        </p>
    <Image alt="facepic" src={facepic} className={styles.facepic}/>
    </div>
    </>

  )
}
