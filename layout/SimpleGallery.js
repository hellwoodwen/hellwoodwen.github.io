export default class simpleGallery extends React.Component {
  render() {
    const { galleryData, openProject } = this.props
    return (
      <React.Fragment>
        {galleryData.content.map((picture,index) => {
          return (
            <section key={picture}>
              <div className="project">
                <a onClick= {(event)=>openProject(event, galleryData.content, "simpleGallery" ,index)}><img src={`static/pics/${galleryData.url}/th/${picture}`} /></a>
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
