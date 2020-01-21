export default class multiObjectsGallery extends React.Component {
  render() {
    const { galleryData } = this.props
    return (
      <React.Fragment>
        {galleryData.content.map(element => {
          const picUrl =
            element.pictures !== undefined
              ? `static/pics/${galleryData.url}/${element.url}/th/${element.pictures[0]}`
              : `static/pics/${galleryData.url}/${element.url}/th/default.jpg`
          return (
            <section key={element.url}>
              <div className="project">
                <img src={picUrl} />
                <h1>{element.name}</h1>
              </div>
            </section>
          )
        })}

        <style jsx>
          {`
            img {
              width: 100%;
              height: auto;
              cursor: pointer;
            }

            h1 {
              margin: 0 0 0 -2px;
              padding-right: 30px;
              line-height: 1em;
              font-size: 1.1em;
              padding-top: 7px;
            }
          `}
        </style>
      </React.Fragment>
    )
  }
}
