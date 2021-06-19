import Head from 'next/head'
import { Reset } from 'styled-reset'
import styled, { createGlobalStyle } from 'styled-components';
import '@fontsource/titillium-web/200.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #202020;
    color: #fefefe;
    font-family: 'Titillium Web';
  }

  main {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 90vh;
    align-items: center;
    justify-content: center;
  }

  h1, h2 {
  line-height: 1em;
  text-transform: lowercase;
  }

  h1 {
    font-size: 30vw;
  }
  h2 {
    font-size: 7vw;
    color: #C0A172;
  }
`

export default function Home() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Head>
        <title>Enhko</title>
        <meta name="description" content="Fetching Digital Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Enhko</h1>
        <h2>Fetching Digital Solutions</h2>
      </main>
    </>
  )
}
