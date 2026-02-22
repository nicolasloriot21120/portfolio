import styles from './page.module.css'
import Tag from '../../components/Tag/Tag'
import Link from 'next/link'
import datas from '../../data/datas.json'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function GenericListPage({params}) {


    const { accomplishment } = await params
    const localDatas = datas[accomplishment]
        // Next.js passe automatiquement le slug dans params
        const item = true //formationsData.find(item => item.slug === accomplishment)
      
      
        // Si le projet n'existe pas, afficher un message
        if (!item) {
          return notFound()
        }

  return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mes Projets</h1>
            <p className={styles.description}>
                Découvrez les projets sur lesquels j'ai travaillé
            </p>

            <div className={styles.grid}>
                {localDatas.map((item) => (
                    <Link
                        href={`/${accomplishment}/${item.slug}`}
                        key={item.id}
                        className={styles.card}
                    >
                        <div className={styles.imageWrapper}>
                            <Image 
                                width={item.image.size.width}
                                height={item.image.size.height}
                                src={item.image.link} 
                                alt={item.title}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h2>{item.title}</h2>
                            <p>{item.shortDescription}</p>
                            <div className={styles.tags}>
                                {
                                  item.tags.map((tech, index) => (
                                    <Tag key={index} isDark={true}>{tech}</Tag>
                                  ))
                                }
                            </div>
                            <span className={styles.viewMore}>Voir la formation →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export function generateStaticParams() {
    let routes = []
    for (const prop in datas) {
        let t = {[prop]: prop}
        routes.push(t)
    } 
    
    return routes
}