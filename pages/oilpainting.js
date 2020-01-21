import Layout from "../layout/Layout"
import contentTree from "../content/contentTree"

export default class extends React.Component {
  render() {
    return <Layout title={`Wenwen - ${contentTree[1].name}`} galleryData={contentTree[1]} />
  }
}
