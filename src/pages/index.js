import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Manami 愛美</title>
        <meta name="description" content="Manami on Solana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/manami.gif" />
      </Head>
      <main className={styles.main}>
        <div className={styles.infos}>
          <img className={styles.manami} src="./manami.gif"/>
          <p className={styles.title}>$manami</p>

          <div>
            <p>A critical error has been detected in the blockchain. manami 愛美 has been deployed as an emergency measure.</p>
          </div>

          <div className={styles.alts}>
            <a href="#tg">Telegram</a>
            <a href="#CA">CA</a>
          </div>

          <div className={styles.dexPaid}>
            <p style={{fontSize:'20px', marginBottom:'10px', color:'#063dac'}}>DEXPAID?</p>
            <div className={styles.dexPaidJSON}>
              <p>{`{`}</p>
              <p style={{marginLeft:'10px'}}>{`"paid": false,`}</p>
              <p style={{marginLeft:'10px'}}>{`"symbol": "manami"`}</p>
              <p>{`}`}</p>
            </div>
            <p style={{marginTop:'20px'}}>Dex will be paid at when $manami reaches $25.000 Marketcap</p>
          </div>

          <div className={styles.contractAddress}>
            <p>CONTRACT ADDRESS:</p>
            <p>ca: ?</p>
          </div>

          <div className={styles.pump}>
            <p className={styles.pumpTitle}>Manami on pump</p>

            <p>Total supply: 1.000.000.000 $manami</p>
          </div>
        </div>
      </main>
    </>
  )
}
