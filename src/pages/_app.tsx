import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const fonts = {
  body:
    "'Helvetica Neue', 'Segoe UI', 'Helvetica', Kanit, system-ui",
  heading:
    "'Helvetica Neue', 'Segoe UI', 'Helvetica', Kanit, system-ui",
}

const theme = extendTheme({ fonts })

export default class CustomApp extends App {
  public render() {
    const { Component, pageProps } = this.props
    
    return (
      <ChakraProvider theme={theme}>
        <Head>
          <title>Touch Sungkawichai</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    )
  }
}
