import Image from 'next/image'
import styles from './page.module.css'
import behance from './images/behance.png'
import inst from './images/insta.png'
import tg from './images/Telegram_logo 1.png'

export default function Contacts() {
  return (
    <>
    <div className={styles.container}>
    <h1 className={styles.text}>You can find me and my projects here:</h1>
    <div className={styles.icons}>
      <Image alt='icon' href = '#' src={behance} className={styles.object}/>
      <Image alt='icon' href = '#' src={inst} className={styles.object}/>
      <Image alt='icon' href = '#' src={tg} className={styles.object}/>
    </div>
    </div>
    </>

  )
}
