import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Manami 愛美</title>
        <meta name="description" content="Manami on Solana. A critical error has been detected in the blockchain. manami 愛美 has been deployed as an emergency measure." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={`/manami.gif`} />
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="420"/>
        <meta property="og:image:height" content="420"/>
        <meta property="og:type" content="website"/>
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
            <a href="#" target='_blank'>Telegram</a>
            <a href="#" target='_blank'>X</a>
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

          <div id='CA' className={styles.contractAddress}>
            <p>CONTRACT ADDRESS:</p>
            <p>ca: ? - Not launched yet.</p>
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
