import Document, { Head, Main, NextScript } from "next/document"
import { Fragment } from "react"
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV === "production"
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, isProduction }
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || []
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date())
        gtag('config', 'UA-156063182-1')
      `
    }
  }

  render() {
    const { isProduction } = this.props
    return (
      <html>
		  <Head />
        <body>
          <Main />
          <NextScript />
          {isProduction && (
            <Fragment>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-156063182-1"
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </Fragment>
          )}
        </body>
      </html>
    )
  }
}
