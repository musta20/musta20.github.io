import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          <title>Mustafa</title>
          <meta
            name="description"
            content="Hi I’m Mustafa and this is my portfolio and blog."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}