import Header from "./Header"
import Main from "./Main"
import contentTree from "../content/contentTree"

export default class Layout extends React.Component {
  getInfo = pageName => {
    let toReturn
    contentTree.map(object => {
      if (object.url === pageName) {
        toReturn = object
      }
    })
    return toReturn
  }

  render() {
    const { children, galleryName } = this.props
    const galleryData = this.getInfo(galleryName)

    return (
      <div id="generalContainer">
        {galleryData && <Header title={`Wenwen - ${galleryData.name}`} />}
        {galleryData && (
          <Main galleryData={galleryData} galleryName={galleryName} />
        )}
        {!galleryData && <Header title="Wenwen - About" />}
        {!galleryData && children}
        <style jsx>
          {`
            div {
              display: grid;
              grid-template-columns: minmax(250px, 1fr) repeat(3, 1fr);
              grid-template-areas: "header body body body";
            }

            @media only screen and (max-width: 600px) {
              div {
                display: block;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
