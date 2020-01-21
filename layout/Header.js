import Head from "next/head"
import contentTree from "../content/contentTree"
import ActiveLink from "./LinksActiver"
import Link from "next/link"

export default class Header extends React.Component {
  render() {
    const { title } = this.props
    return (
      <React.Fragment>
        <Head>
          <title> {title} </title>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/styles.css"
          />
        </Head>
        <header>
          <div id="hero">
            <h1>
              <Link href="/">
                <a>WenWen</a>
              </Link>
            </h1>
          </div>
          <nav>
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
          `}
        </style>
      </React.Fragment>
    )
  }
}
