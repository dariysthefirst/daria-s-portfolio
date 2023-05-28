import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import shop from './images/buble tea.png'
import blinds from './images/smart blinds.png'
import chillflix from './images/chillflix app.png'



export default function Projects() {
  return (
    <> 
    <div className={styles.container}>
      <div className={styles.content}>
    <div className={styles.projects}>
      <h3 className={styles.projname}>Website for bubble tea shop</h3>
      <Image src={shop} className={styles.projpic}/>
    </div>
    <div className={styles.projects}>
      <h3 className={styles.projname}>App for smart blinds</h3>
      <Image src={blinds} className={styles.projpicblinds}/>
    </div>
    <div className={styles.projects}>
      <h3 className={styles.projname}>App for watching series</h3>
      <Image src={chillflix} className={styles.projpicchill}/>
    </div>
    </div>
    </div>
    </>

  )
}
