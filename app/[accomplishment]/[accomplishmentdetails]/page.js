import styles from './page.module.css'
import datas from '../../../data/datas.json'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function ProjectDetail({ params }) {
    const { accomplishment, accomplishmentdetails } = await params
    
    // Next.js passe automatiquement le slug dans params
    const item = datas[accomplishment]?.find(item => item.slug === accomplishmentdetails)
  
    // Si le projet n'existe pas, afficher un message
    if (!item) {
      return notFound()
    }

  return (
        <div className={styles.container}>
          <div className={styles.header}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.description}>{item.description}</p>
          </div>

          <div className={styles.content}>
              <div className={styles.imageWrapper}>
                  <Image 
                    className={styles.image}
                    width={item.image.size.width}
                    height={item.image.size.height}
                    src={item.image.link} 
                    alt={item.title}
                    preload={true}
                  />
              </div>

                <div className={styles.details}>
                  <h2>Description</h2>
                  <div className={styles.technologies}>
                     <p>
                        {item.longDescription}
                     </p>
                  </div>
              </div>

              <div className={styles.details}>
                  <h2>Technologies utilisées</h2>
                  <div className={styles.technologies}>
                      {
                      item.tags.map((tech, index) => (
                          <span key={index} className={styles.tech}>
                              {tech}
                          </span>
                      ))}
                  </div>

                  <div className={styles.links}>
                    <MyA buttonText={'Voir le code'} myStyles={[styles.link]} project={item}/>
                    <MyA buttonText={'Voir la démo'} myStyles={[styles.link, styles.linkPrimary]} project={item}/>
                </div>
              </div>
          </div>
      </div>
  )
}

function MyA({buttonText, myStyles, project}) {

    let st = ''
    myStyles.map(s => {
        st = st + ' ' + s
    })
    return (
        <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${st}`}
            >
                {buttonText} →
    </a>
    )
}
export function generateStaticParams() {
    for (const prop in datas) {
        return datas[prop]?.map((detailedData) => ({
            accomplishmentdetails: detailedData.slug,
        }))
    } 
}