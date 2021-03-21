import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const fonts = {
  body: "'Playfair Display', serif",
}

const theme = extendTheme({ fonts })

export default class CustomApp extends App {
  public render() {
    const { Component, pageProps } = this.props
    
    return (
      <ChakraProvider theme={theme}>
        <Head>
          <title>World History Of Governing</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    )
  }
}
