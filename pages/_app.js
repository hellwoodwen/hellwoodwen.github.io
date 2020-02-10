import App, { Container } from "next/app"
import Head from "next/head"
import Router from "next/router"
import { trackPageView } from "../helpers"

export default class MyApp extends App {
  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      trackPageView(url)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head />
        <Component {...pageProps} />
      </Container>
    )
  }
}
