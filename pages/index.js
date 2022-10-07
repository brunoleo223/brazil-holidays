import Head from 'next/head'
import { formatDistanceToNow, format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import ptBR from 'date-fns/locale/pt-BR';
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function Home({holidays}) {
  const today = new Date();
  function findClosestHoliday() {
    const closest = holidays.reduce((prev, curr) => {
      const prevDate = new Date(prev.date);
      const currDate = new Date(curr.date);
      return (Math.abs(currDate - today) < Math.abs(prevDate - today) ? curr : prev);
    });
    return closest;
  }

  
  const closestHoliday = findClosestHoliday();
  const nextHolidayTZ = zonedTimeToUtc( closestHoliday.date, 'America/Sao_Paulo');
  const date = format(new Date(`${nextHolidayTZ}`), 'PPPP', {locale: ptBR})
  const nextHoliday = formatDistanceToNow(new Date(nextHolidayTZ), {locale: ptBR});

  const [classNumber, setClassNumber] = useState(0);
  
  useEffect(() => {
    const random = Math.floor(Math.random() * 8) + 1;
    setClassNumber(random);
  }, [])
    
  return (
    <>
      <div className="logo">
        <Image src="/logo.svg"  alt="" width={500} height={331} />
      </div>
      <div className={`content g${classNumber}`}>
        <Head>
          <title>Feriados Brasil</title>
        </Head>

        <div className={styles.bg}>
          <div className={styles.card}>
            <p className={styles.holiday}>O próximo feriado será o de</p>
            <p className={styles.holiday}><b>{closestHoliday.name}</b></p>
          </div>
        </div>

        <div className="bg-image">
          <h1 className={styles.distance}>
            {nextHoliday ? `em ${nextHoliday}` : 'amanhã'}<br/>
            <div>{date}</div>
          </h1>
        </div>
      </div>
    </>
  )
}
  
export async function getStaticProps(){
  const year = new Date().getFullYear();
  const holidays = await fetch(`https://brasilapi.com.br/api/feriados/v1/${year}`);
  const holidaysInJson = await holidays.json()
  
  return {
    props: {
      holidays: holidaysInJson
    }
  }
  
}
    