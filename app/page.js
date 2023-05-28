import Image from 'next/image'
import styles from './page.module.css'
import pic from './images/cat.png'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
    <h1 className={styles.h1}>portfolio.</h1>
    <Image alt="cat" src={pic} className={styles.pic}/>
    </div>
    </>

  )
}
