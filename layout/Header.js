import Head from "next/head"
import contentTree from "../content/contentTree"
import ActiveLink from "./LinksActiver"
import Link from "next/link"
// import Router from "next/router"
// import { trackPageView } from "../helpers"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { navState: "hidden" }
  }

  // componentDidMount() {
  //   Router.onRouteChangeComplete = url => {
  //     trackPageView(url)
  //   }
  // }

  openNav = event => {
    event.preventDefault()
    const navClass = this.state.navState === "hidden" ? "visible" : "hidden"
    this.setState({
      navState: navClass
    })
  }

  render() {
    const { title } = this.props
    const { navState } = this.state
    return (
      <React.Fragment>
        <Head>
          <title> {title} </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="shortcut icon"
            href="static/favicon.ico"
            type="image/x-icon"
          ></link>
          <link rel="icon" href="static/favicon.ico" type="image/x-icon"></link>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/styles.css"
          />
          <link rel="stylesheet" href="/static/css/nprogress.css" />
        </Head>
        <header>
          <div id="hero">
            <h1>
              <Link href="/">
                <a>WenWen</a>
              </Link>
            </h1>
            <a id="openNav" onClick={e => this.openNav(e)}>
              Open Nav
            </a>
          </div>
          <nav className={navState}>
            <ul>
              <li>Works</li>
              <ul>
                {contentTree.map((element, index) => {
                  const className = ""
                  const url = index === 0 ? "/" : `/${element.url}`
                  return (
                    <li key={url}>
                      <ActiveLink href={url}> {element.name} </ActiveLink>
                    </li>
                  )
                })}
              </ul>
              <li>
                <a href="about">About</a>
              </li>
            </ul>
          </nav>
        </header>

        <style jsx>
          {`
            header {
              grid-area: header;
            }
            h1 {
              text-align: center;
              margin: 50px 40px 1px;
              border-bottom: 1px solid #c4c4c4;
              line-height: 28px;
            }
            h1 a {
              text-decoration: none;
              font-family: raleway-black;
              color: #000000;
            }
            ul {
              margin-right: 0;
              margin-bottom: 0;
              margin-left: 0;
              padding: 30px 0 0;
            }

            li {
              margin-left: 50px;
              list-style: none;
              font: 1.1em raleway-semibold;
              margin-bottom: 17px;
            }

            ul ul {
              padding: 0 0 20px;
            }

            ul ul li {
              font: 0.9em raleway-light;
              padding-left: 15px;
            }

            @media only screen and (max-width: 600px) {
              header {
                width: 100vw;
                position: absolute;
                z-index: 1;
                background-color: #ffffff;
              }

              h1 {
                margin: 0;
                padding: 12px 0 5px 15px;
                float: left;
                border-bottom: none;
              }

              #openNav {
                background: url(static/css/menu.gif) 90% 18px no-repeat;
                float: right;
                height: 36px;
                width: 202px;
                text-indent: -1000px;
              }

              header div {
                height: 50px;
              }

              nav {
                display: none;
              }

              nav.visible {
                display: block;
              }

              #hero {
                border-bottom: 1px solid #c4c4c4;
              }
            }
          `}
        </style>
      </React.Fragment>
    )
  }
}
