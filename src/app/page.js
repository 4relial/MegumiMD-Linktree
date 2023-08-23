import Image from 'next/image'
import Link from 'next/link'
// import styles from './page.module.css'
import styles from './anu.css'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {

  return (
    <>
      <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=windows-1252" />
        <title>Megumi BOT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="MEGUMI-MD" />
        <meta property="og:description" content="Daftar Nomor BOT WhatsApp" />
        <meta property="og:image" content="https://katou.my.id/yuuka.png" />
        <link rel="stylesheet" href="assets/style.css" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        {/* Alpha.ly Version 0.1 | Development Version */}
        <div className="container">
          <div className="col-xs-12">
            <div className="text-center" style={{ paddingTop: '30px', paddingBottom: '20px' }}>
            <img className="backdrop linktree" />
              <h2 style={{ color: '#ffffff', paddingTop: '20px' }}><b>WHATSAPP BOT</b></h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-xs-12">
            <div className="text-center">
              <div style={{ paddingBottom: '20px' }}>
                <Link href='https://wa.me/6283157447725'>
                  <button type="button" className="btn btn-outline-light shake" style={{ width: '70%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 800 }}>Megumi Kato</button>
                </Link>
              </div>
              <div style={{ paddingBottom: '20px' }}>
                <Link href='https://wa.me/6288271062064'>
                  <button type="button" className="btn btn-outline-light" style={{ width: '70%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600 }}>Theresa Apocalypse</button>
                </Link>
              </div>
              <div style={{ paddingBottom: '20px' }}>
                <Link href='https://wa.me/6281952324777'>
                  <button type="button" className="btn btn-outline-light" style={{ width: '70%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600 }}>Hitori Gotou</button>
                </Link>
              </div>
              <div style={{ paddingBottom: '20px' }}>
                <Link href='https://wa.me/6283143726134'>
                  <button type="button" className="btn btn-outline-light" style={{ width: '70%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600 }}>Chisato Nishikigi</button>
                </Link>
              </div>
              {/* <div style={{ paddingBottom: '20px' }}>
                <Link href='https://wa.me/6283143726134'>
                  <button type="button" className="btn btn-outline-light" style={{ width: '70%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600 }}>Chisato Nishikigi</button>
                </Link>
              </div> */}
              <div style={{ paddingBottom: '20px' }}>
                <Link href='https://chat.whatsapp.com/BfaPLeo5GZoJoFSTGeIZzd'>
                  <button type="button" className="btn btn-outline-light" style={{ width: '70%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600 }}>Grup Pengumuman</button>
                </Link>
              </div>
              <div style={{ paddingBottom: '30px' }}>
                <Link href='https://chat.whatsapp.com/FA6IiC89ianEwdTW3DzHmj'>
                  <button type="button" className="btn btn-outline-light" style={{ width: '70%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600 }}>Grup Megumi Kato</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="https://github.com/4relial" style={{ color: '#34312f' }} target="_blank">Created by 4Relial</a>
        </div>
        {/* This pre-lander was created by Brandon Nilsson */}
        {/* You're welcome to edit, reproduce and change this template as long as original contributation stays present on the website at all times.  */}
      </div>
      <Analytics />
    </>
  )
}
