import Header from "./Header"
import Main from "./Main"

export default class Layout extends React.Component {
  render() {
    const { title, galleryData, children } = this.props

    return (
      <div id="generalContainer">
        <Header title={title} />
        {galleryData && <Main galleryData={galleryData} />}
        {!galleryData && children}
        <style jsx>{`
          div {
            display: grid;
            grid-template-columns: minmax(250px, 1fr) repeat(3, 1fr);
            grid-template-areas: "header body body body";
          }
        `}</style>
        <style jsx global>
          {`
            nav a {
              text-decoration: none;
            }

            nav a.actual {
              font-family: raleway-semibold;
              cursor: default;
            }

            p {
              color: #6e6e6e;
            }

            main {
              grid-area: body;
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              display: grid;
              padding: 60px 60px 60px 0;
              grid-gap: 50px 40px;
            }
          `}
        </style>
      </div>
    )
  }
}
