import React from 'react'
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"

class NextDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  public render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="shortcut icon" href="/icon.png" /> */}
          <link rel="preconnect" href="https://fonts.gstatic.com"/> 
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"/>

          <meta name="theme-color" content="#444444" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes"
          />
          <meta property="og:title" content="WorldHistoryOfGoverning" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={'dark'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument
