import "isomorphic-fetch"
import Link from "next/link"

export default class extends React.Component {
  static async getInitialProps() {
    const req = await fetch("https://api.tvmaze.com/search/shows?q=batman")
    const episodios = await req.json()
    return { episodios }
  }

  render() {
    const episodios = this.props.episodios
    return (
      <div>
        <header>Batman</header>

        <div className="channels">
          {episodios.map(episodio => (
            <Link href={`/episodes?id=${ episodio.show.id }`} key= {episodio.show.id}>
              <a className="channel">
                <img src={episodio.show.image.medium} alt="" />
                <h2>{episodio.show.name}</h2>
              </a>
            </Link>
          ))}
        </div>

        <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          .channel {
            display: block;
            border-radius: 3px;
            margin-bottom: 0.5em;
            color: #333;
            text-decoration: none;
          }
          .channel img {
            width: 100%;
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0, 0.15);
            width: 100px;
          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            maring: 0;
            text-align: center;
          }
        `}</style>

        <style jsx global>{`
            body {
                margin: 0;
                font-family: system-ui
                background: white;
            }
            `}</style>
      </div>
    )
  }
}
