import React from 'react'
import { useState } from 'react'
import homePageGif from 'assets/homeGif.gif'
import styles from 'componenets/home/homeStyle.module.css'
import { GeneralInfoServie } from 'services/generalInfoService'
import { useQuery } from 'services/api/useQuery'

export const HomeMainContent = () => {
  const [generalData, setgeneralData] = useState();

  const getGeneralInfo = async () => {
    let { data } = await GeneralInfoServie.getAll();
    setgeneralData({ ricksIfno: data.ricksIfno, mortysInfo: data.mortysInfo })
  }

  useQuery(getGeneralInfo, { onSuccess: (data) => setgeneralData(data), });

  return (
    <div className={styles.home__mainContent}>
      <img className={styles.homePage__gif} src={homePageGif} alt="Home page gif" />
      {generalData &&
        <article className='info__container'>
          <p className={styles.article__title}>Ricks information</p>
          <p className={styles.article__text}>{generalData.ricksIfno}</p>
          <p className={styles.article__title}>Mortys information </p>
          <p className={styles.article__text}> {generalData.mortysInfo} </p>
        </article>
      }
    </div>
  )
}
