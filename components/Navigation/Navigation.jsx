'use client'

import Link from 'next/link'
import styles from '../commoncomponent.module.css';
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const paths = [
  {
    pathName: "/",
    diplayPathName: "Accueil"
  },
   {
    pathName: "/projects",
    diplayPathName: "Projets",
    dataPath: 'projects'
  },
   {
    pathName: "/formations",
    diplayPathName: "Ma formation",
    dataPath: 'formations'
  },
   {
    pathName: "/contact",
    diplayPathName: "Contact"
  },
]

export default function Navigation() {

  const [isOpen, setisOpen] = useState(false)
  const pathName = usePathname()

  const toggleMenu = () => {
    setisOpen(!isOpen)
  }

  const closeMenu = () => {
    setisOpen(false)
  }

 return (
   <nav className={styles.nav}>
     <div className={styles.container}>
       <Link href="/" className={styles.logo} onClick={closeMenu}>
         Mon Portfolio
       </Link>

      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-label="Menu"
        >
          <span className={isOpen ? styles.burgerOpen :''}></span>
          <span className={isOpen ? styles.burgerOpen :''}></span>
          <span className={isOpen ? styles.burgerOpen :''}></span>
        </button>
       <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>

        {
          paths.map((path, key) => {
            return (
              <MyLink key={key} closemenu={closeMenu} pathName={path.pathName} currentPathName={pathName} displayPathName={path.diplayPathName}/>
            )
          })
        }
       </ul>
     </div>
   </nav>
 )
}

export function MyLink({closemenu, pathName, currentPathName, displayPathName}) {
  return (
        <li>
           <Link href={pathName} className={currentPathName === pathName ? `${styles.link} ${styles.active}` : styles.link} onClick={closemenu}>
             {displayPathName}
           </Link>
         </li>
  )
}