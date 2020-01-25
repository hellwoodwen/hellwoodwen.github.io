export default class GalleryModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { actualItem: this.props.selectedItem }
  }

  changeNext = event => {
    event.preventDefault()
    const updateItem =
      this.state.actualItem === this.props.projectInfo.length - 1
        ? 0
        : this.state.actualItem + 1
    this.setState({ actualItem: updateItem })
  }

  changePrev = event => {
    event.preventDefault()
    const updateItem =
      this.state.actualItem === 0
        ? this.props.projectInfo.length - 1
        : this.state.actualItem - 1
    this.setState({ actualItem: updateItem })
  }

  render() {
    const { closeProject, projectInfo } = this.props
    const { actualItem } = this.state

    return (
      <div id="modalGallery">
        <div id="modalNav" className="SimpleGallery">
          <div id="modalClose" className="modalButton">
            <a onClick={closeProject}>Close</a>
          </div>
          <div id="modalPrev" className="modalButton">
            <a onClick={e => this.changePrev(e)}>Previous</a>
          </div>
          <div id="modalNext" className="modalButton">
            <a onClick={e => this.changeNext(e)}>Next</a>
          </div>
          <div id="picContainer">
            <img
              src={`/static/pics/oilpainting/big/${projectInfo[actualItem]}`}
            />
          </div>
        </div>
        <div id="picCounter">
          {" "}
          {`${actualItem + 1} of ${projectInfo.length}`}{" "}
        </div>

        <style jsx>
          {`
            #modalGallery {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background-color: rgba(0, 0, 0, 0.88);
              z-index: 100;
            }

            #modalNav {
              position: fixed;
              display: grid;
              grid-template-columns:
                [prev] minmax(74px, 8vw) [image] auto [next] minmax(74px, 8vw)
                [end];
              grid-template-rows: [close ]minmax(74px, 8vw) [next] auto [end];
              grid-gap: 0;
              width: 100vw;
              height: 100vh;
            }

            .modalButton {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: rgba(0, 0, 0, 0.34);
            }

            .modalButton a {
              width: 71px;
              height: 71px;
              display: block;
              background-image: url(/static/css/modal-nav.png);
              text-indent: -10000px;
            }

            #modalPrev {
              grid-column: prev / image;
              grid-row: close / end;
            }

            #modalClose {
              grid-column: next / end;
              grid-row: close / next;
              background-color: rgba(0, 0, 0, 0.75);
              padding-right: 14px;
            }

            #modalNext {
              grid-row: next / end;
              grid-column: next / end;
              padding-right: 14px;
            }

            .modalButton a:hover {
              background-position-x: right;
              cursor: pointer;
            }

            #modalPrev a {
              background-position-y: bottom;
            }

            #modalNext a {
              background-position-y: center;
              margin-top: -60px;
            }

            #picContainer {
              grid-row: close / end;
              grid-column: image / next;
              text-align: center;
            }

            #picContainer img {
              width: auto;
              height: auto;
              max-height: 100vh;
              max-width: 90%;
            }

            #picCounter {
              position: fixed;
              right: 50%;
              top: 10px;
              background-color: rgba(0, 0, 0, 0.79);
              width: 120px;
              height: 24px;
              text-align: center;
              margin-right: -60px;
              color: #8e8e8e;
              font-size: 0.8em;
              padding-top: 6px;
              border-radius: 20px;
            }

            @media only screen and (max-width: 600px) {
              #picCounter{
                top: 120px;
              }

              #modalNav {
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: 80px auto;
                grid-template-areas:
                  "prev next close"
                  "picture picture picture";
              }
              #modalPrev {
                grid-area: prev;
              }
              #modalNext {
                grid-area: next;
              }
              #modalNext a {
                margin-top: 0;
              }
              #modalClose {
                grid-area: close;
              }
              #picContainer {
                grid-area: picture;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              #picContainer img {
                max-height: 80vh;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
