import SimpleGallery from "./SimpleGallery"
import MultiObjectsGallery from "./MultiObjectsGallery"
import SimpleGalleryModal from "./SimpleGalleryModal"
import MultiObjectGalleryModal from "./MultiObjectsGalleryModal"

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectData: { info: null, galleryType: null, selectedItem: null }
    }
  }

  openProject = (event, projectInfo, galleryType, changeSelected) => {
    event.preventDefault()
    this.setState({
      projectData: {
        info: projectInfo,
        galleryType: galleryType,
        selectedItem: changeSelected
      }
    })
  }

  closeProject = event => {
    event.preventDefault()
    this.setState({
      projectData: { info: null, galleryType: null, selectedItem: null }
    })
  }

  render() {
    const { galleryData, galleryName } = this.props
    const { projectData } = this.state
    return (
      <main>
        {projectData.galleryType === "simpleGallery" && (
          <SimpleGalleryModal
            closeProject={this.closeProject}
            selectedItem={projectData.selectedItem}
            projectInfo={projectData.info}
          />
        )}

        {projectData.galleryType === "multipleObjectsGallery" && (
          <MultiObjectGalleryModal closeProject={this.closeProject} projectInfo={projectData.info} galleryName={galleryName} />
        )}

        {galleryData.galleryType === "singleObject" && (
          <SimpleGallery
            galleryData={galleryData}
            openProject={this.openProject}
          />
        )}

        {galleryData.galleryType === "multiObjects" && (
          <MultiObjectsGallery
            galleryData={galleryData}
            openProject={this.openProject}
          />
        )}
      </main>
    )
  }
}
