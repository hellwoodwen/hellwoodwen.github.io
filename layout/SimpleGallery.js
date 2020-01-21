export default class simpleGallery extends React.Component {
  render() {
    const { galleryData } = this.props
    return (
      <React.Fragment>
        {galleryData.content.map(picture => {
          return (
            <section key={picture}>
              <div className="project">
                <img src={`static/pics/${galleryData.url}/th/${picture}`} />
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
          `}
        </style>
      </React.Fragment>
    )
  }
}
