import SimpleGallery from "./SimpleGallery"
import MultiObjectsGallery from "./MultiObjectsGallery"

export default class Main extends React.Component {
  render() {
    const { galleryData } = this.props
    return (
      <main>
        {galleryData.galleryType === "singleObject" && <SimpleGallery galleryData={galleryData} />}

        {galleryData.galleryType === "multiObjects" && <MultiObjectsGallery galleryData={galleryData} /> }
      </main>
    )
  }
}
