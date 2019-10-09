import Link from 'next/link'
import Head from 'next/head'
import Normalize from './normalize'
import Separator from './separator'
import GoogleAnalytics from './google-analytics'
import {PropsWithChildren} from 'react'

export default (props: PropsWithChildren<{}>) => <div style={{maxWidth: '90%', width: '700px', margin: 'auto'}}>
  <Head>
    <style>{`
      @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);
      body {
        font-family: 'Open Sans', sans-serif;
        animation: fadein 0.5s linear;

        color: #333;
        font-size: 18px;
        font-weight: 300;
      }
      a {
        text-decoration: none;
        font-weight: bold;
        color: #d07070;
      }
      a:hover {
        color: #f08080;
      }
      @keyframes fadein {
          0% {opacity:0;}
          100% {opacity:1;}
      }
    `}</style>
  </Head>
  <Normalize />
  <header style={{padding: '0', maxWidth: '90%', margin: 'auto'}}>
      <Link href="/">
        <span style={{
          textAlign: 'center',
          display: 'block',
          margin: '50px 0 5px',
          cursor: 'pointer',
          fontSize: '50px',
          fontWeight: 300,
        }}>
            Kirill Rogovoy
        </span>
      </Link>
      <span style={{
        display: 'block',
        margin: '0 auto',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 300
      }}>
        Articles
      </span>
  </header>

  <Separator />

  <main>
    {props.children}
  </main>

  <GoogleAnalytics />
</div>
